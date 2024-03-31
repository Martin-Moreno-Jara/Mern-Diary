import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const handleLogout = () => {
    console.log("is the logout being used from here?");
    logout();
  };
  return (
    <header>
      <div className="container">
        <Link to={"/"}>
          <h1>Diary</h1>
        </Link>
        <nav>
          {user && (
            <div>
              <span>{user.email}</span>
              <button onClick={handleLogout}>Logout</button>
            </div>
          )}

          {!user && (
            <div>
              <Link to="/signup">
                <h3>Signup</h3>
              </Link>

              <Link to="/login">
                <h3>login</h3>
              </Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
