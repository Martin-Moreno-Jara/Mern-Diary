import { useAuthContext } from "./useAuthContext";
import { useState } from "react";
const urldev = process.env.REACT_APP_DEVURL;
const productionAPI = process.env.REACT_APP_PROURL;

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);
    const result = await fetch(`${productionAPI}/api/user/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const json = await result.json();

    if (!result.ok) {
      setIsLoading(false);
      setError(json.error);
    }
    if (result.ok) {
      setIsLoading(false);
      localStorage.setItem("user", JSON.stringify(json));
      dispatch({ type: "LOGIN", payload: json });
    }
  };
  return { login, isLoading, error };
};
