import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <header className="header">
      <div className="mid">
        <ul className="navbar">
          <li>
            <Link to="/">counter</Link>
          </li>
          <li>
            <Link to="/login">Login Submission</Link>
          </li>
          <li>
            <Link to="/easy">Easy Button</Link>
          </li>
          <li>
            <Link to="/greet">Greetings </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};
export default Navbar;
