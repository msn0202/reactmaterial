import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

function Navbar(props) {
  return (
    <>
      <div>
        <ul className="header-bar-one">
          <li className="header-bar-two">
            <Link to="/">Home</Link>
          </li>
          <li className="header-bar-two">
            <Link to="/about">About</Link>
          </li>
          <li className="header-bar-two">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
