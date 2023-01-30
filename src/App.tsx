import { useEffect, useState } from "react";
import "./App.css";
import { PaymentForm } from "./components/PaymentForm/PaymentForm";
import { PaymentHome } from "./components/PaymentHome/PaymentHome";

const API = "https://portaireapi.herokuapp.com/test/payment";

interface ApiResponse {
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

function App() {
  const [currentScreen, setCurrentScreen] = useState<string>("home");
  const [formData, setFormData] = useState<ApiResponse[] | null>(null);

  const handleBackButton = () => {
    setCurrentScreen("home");
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(API);
      const data = await response.json();
      console.log(data);
      setFormData(data);
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      {currentScreen === "home" ? (
        <PaymentHome setCurrentScreen={setCurrentScreen} />
      ) : (
        <PaymentForm
          onBack={handleBackButton}
          formData={formData ? formData[0] : null}
        />
      )}
    </div>
  );
}

export default App;
