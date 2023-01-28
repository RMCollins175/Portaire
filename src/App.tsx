import { useState } from "react";
import "./App.css";
import { PaymentForm } from "./components/PaymentForm/PaymentForm";
import { PaymentHome } from "./components/PaymentHome/PaymentHome";

function App() {
  const [currentScreen, setCurrentScreen] = useState<string>("home");

  const handleBackButton = () => {
    setCurrentScreen("home");
  };

  return (
    <div className="container">
      {currentScreen === "home" ? (
        <PaymentHome setCurrentScreen={setCurrentScreen} />
      ) : (
        <PaymentForm onBack={handleBackButton} />
      )}
    </div>
  );
}

export default App;
