import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <Link to={"/"}>
          <h1>Diary</h1>
        </Link>
        <nav>
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
