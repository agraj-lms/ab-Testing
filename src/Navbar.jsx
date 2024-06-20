// src/Navbar.js
import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = ({ text }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">{text ? text : "B-Page"}</div>
      <div className="hamburger" onClick={toggleMenu}>
        &#9776;
      </div>
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li className="nav-item">
          <a href="/">Home</a>
        </li>

        <li className="nav-item">
          <a href="#contact">Contact</a>
        </li>
        <li className="nav-item">
          <Link to="/Bpage">Click on B-page</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
