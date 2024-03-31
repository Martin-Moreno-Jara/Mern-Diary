import { useAuthContext } from "./useAuthContext";
export const useLogout = () => {
  const { dispatch } = useAuthContext();
  //erase from global scope
  const logout = () => {
    localStorage.removeItem("user");

    dispatch({ type: "LOGOUT" });
  };
  return { logout };
};
