import { createContext, useReducer } from "react";

export const authContext = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      console.log("logeando");
      return { user: action.payload };
    case "LOGOUT":
      return { user: null };
    default:
      return { state };
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, { state: null });
  return (
    <authContext.Provider value={{ ...state, dispatch }}>
      {children}
    </authContext.Provider>
  );
};
