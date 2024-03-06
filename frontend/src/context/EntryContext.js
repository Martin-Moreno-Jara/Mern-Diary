import { createContext, useReducer } from "react";

export const EntryContext = createContext();

export const EntryReducer = (state, action) => {
  switch (action.type) {
    case "SET_ENTRIES":
      return { entries: action.payload };
    case "CREATE_ENTRY":
      return { entries: [action.payload, ...state.entries] };
    default:
      return state;
  }
};

const [state, dispatch] = useReducer(EntryReducer, {
  entries: null,
});

export const EntryContextProvider = ({ children }) => {
  return (
    <EntryContext.Provider value={(state, dispatch)}>
      {children}
    </EntryContext.Provider>
  );
};
