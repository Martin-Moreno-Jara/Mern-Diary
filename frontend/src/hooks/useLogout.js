import { useAuthContext } from "./useAuthContext";
import { useEntryContext } from "./useEntryContext";
export const useLogout = () => {
  const { dispatch: dispatchEntry } = useEntryContext();
  const { dispatch } = useAuthContext();
  //erase from global scope
  const logout = () => {
    localStorage.removeItem("user");
    dispatch({ type: "LOGOUT" });
    dispatchEntry({ type: "SET_ENTRIES", payload: null });
  };
  return { logout };
};
