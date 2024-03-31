import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";

const Navbar = () => {
  const { logout } = useLogout();

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
          <div>
            <button onClick={handleLogout}>Logout</button>
          </div>

          <div>
            <Link to="/signup">
              <h3>Signup</h3>
            </Link>

            <Link to="/login">
              <h3>login</h3>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
