import { authContext } from "../context/AuthContex";
import { useContext } from "react";

export const useAuthContext = () => {
  const context = useContext(authContext);

  if (!context) {
    throw Error("useAuthContext() used out of reach");
  }
  return context;
};
