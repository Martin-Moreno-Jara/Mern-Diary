import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
const devurl = process.env.REACT_APP_DEVURL;

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const signup = async (email, password) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch(`${devurl}/api/user/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }
    if (response.ok) {
      console.log("logeando");
      await localStorage.setItem("user", JSON.stringify(json));
      const result = await localStorage.getItem("user");
      console.log(result);
      dispatch({ type: "LOGIN", payload: json });
      setIsLoading(false);
    }
  };
  return { signup, isLoading, error };
};
