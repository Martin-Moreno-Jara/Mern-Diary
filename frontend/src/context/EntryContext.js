import { createContext, useReducer } from "react";

export const EntryContext = createContext();

export const EntryReducer = (state, action) => {
  switch (action.type) {
    case "SET_ENTRIES":
      return { entries: action.payload };
    case "CREATE_ENTRY":
      return { entries: [action.payload, ...state.entries] };
    case "DELETE_ENTRY":
      console.log(action.payload);
      return {
        entries: state.entries.filter((ent) => ent._id !== action.payload._id),
      };
    default:
      return state;
  }
};

export const EntryContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(EntryReducer, {
    entries: null,
  });
  return (
    <EntryContext.Provider value={{ ...state, dispatch }}>
      {children}
    </EntryContext.Provider>
  );
};
