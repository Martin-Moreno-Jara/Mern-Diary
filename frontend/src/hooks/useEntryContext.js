import { EntryContext } from "../context/EntryContext";
import { useContext } from "react";

export const useEntryContext = () => {
  const context = useContext(EntryContext);

  if (!context) {
    throw Error("UseEntryContext() used out of reach");
  }
  return context;
};
