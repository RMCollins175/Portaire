import { useEffect, useReducer } from "react";
import { PaymentForm } from "./components/PaymentForm/PaymentForm";
import { PaymentHome } from "./components/PaymentHome/PaymentHome";
import { getRandomElement } from "./components/utilities/getRandomElement";
import { Action, AppState } from "./types";
import "./App.css";

const API = "https://portaireapi.herokuapp.com/test/payment";

const reducer = (state: AppState, action: Action) => {
  switch (action.type) {
    case "SET_CURRENT_SCREEN":
      return { ...state, currentScreen: action.payload };
    case "SET_FORM_DATA":
      return { ...state, formData: action.payload };
    case "SET_IS_LOADING":
      return { ...state, isLoading: action.payload };
    case "SET_STATUS":
      return { ...state, status: action.payload };
    case "INCREMENT_ATTEMPTS":
      return { ...state, attempts: state.attempts + 1 };
    default:
      return state;
  }
};

const initialState: AppState = {
  currentScreen: "home",
  formData: null,
  isLoading: true,
  status: null,
  attempts: 1,
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleBackButton = () => {
    dispatch({ type: "SET_CURRENT_SCREEN", payload: "home" });
  };
  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    let isCancelled = false;

    const fetchData = async () => {
      try {
        const response = await fetch(API, { signal });
        if (!isCancelled) {
          if (response.ok) {
            const data = await response.json();
            dispatch({
              type: "SET_FORM_DATA",
              payload: getRandomElement(data),
            });
            dispatch({ type: "SET_IS_LOADING", payload: false });
          } else {
            throw new Error("Fetch failed");
          }
        }
      } catch (error) {
        if (!isCancelled) {
          if (state.attempts <= 5) {
            dispatch({ type: "INCREMENT_ATTEMPTS" });
            dispatch({ type: "SET_STATUS", payload: "error" });
            console.error(error);
          }
        }
      }
    };

    fetchData();

    return () => {
      isCancelled = true;
      abortController.abort();
    };
  }, [state.attempts]);

  return (
    <div className="container">
      {state.currentScreen === "home" ? (
        <PaymentHome dispatch={dispatch} />
      ) : (
        <PaymentForm
          onBack={handleBackButton}
          formData={state.formData}
          isLoading={state.isLoading}
          status={state.status}
        />
      )}
    </div>
  );
}

export default App;
