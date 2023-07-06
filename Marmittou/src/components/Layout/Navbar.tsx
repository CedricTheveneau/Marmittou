import { Link } from "react-router-dom";
import "./Navbar.css";
import SearchEngine from "./SearchEngine";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <Link className="logoWrapper" to="/">
          <div className="logoCircle"></div>
          <h1>MARMITTOU</h1>
        </Link>
      </div>
      <div className="searchbar">
        <SearchEngine />
      </div>
      <div className="sections">
        <Link to="/">Home</Link>
        <p>|</p>
        <Link to="/Add">Create recipe</Link>
      </div>
    </div>
  );
};

export default Navbar;
