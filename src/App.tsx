import { useEffect, useState } from "react";
import "./App.css";
import { PaymentForm } from "./components/PaymentForm/PaymentForm";
import { PaymentHome } from "./components/PaymentHome/PaymentHome";
import { getRandomElement } from "./components/utilities/getRandomElement";

const API = "https://portaireapi.herokuapp.com/test/payment";

export interface ApiResponse {
  address_one: number;
  address_two: string;
  email: string;
  first_name: string;
  last_name: string;
  post_code: string;
  state: string;
  __v: number;
  _id: string;
}

type DataStatuses = "success" | "error" | "loading";

function App() {
  const [currentScreen, setCurrentScreen] = useState<string>("home");
  const [formData, setFormData] = useState<ApiResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean | null>(true);
  const [status, setStatus] = useState<DataStatuses | null>(null);
  const [attempts, setAttempts] = useState(1);

  const handleBackButton = () => {
    setCurrentScreen("home");
  };

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    const fetchData = async () => {
      try {
        const response = await fetch(API, { signal: signal });
        if (response.ok) {
          const data = await response.json();
          setFormData(getRandomElement(data));
        } else {
          throw new Error("Fetch failed");
        }
      } catch (error) {
        if (attempts <= 5) {
          setAttempts((a) => a + 1);
          setStatus("error");
          console.error(error);
        }
      }
    };

    fetchData();

    return () => {
      abortController.abort();
    };
  }, [attempts]);

  return (
    <div className="container">
      {currentScreen === "home" ? (
        <PaymentHome setCurrentScreen={setCurrentScreen} />
      ) : (
        <PaymentForm
          onBack={handleBackButton}
          formData={formData ? formData : null}
        />
      )}
    </div>
  );
}

export default App;
