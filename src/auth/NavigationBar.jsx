import React from "react";
import { NavLink } from "react-router-dom"; // Import NavLink for navigation
import { Link } from 'react-router-dom';


function NavigationBar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <NavLink to="/" className="navbar-title">
          Ebook Maker
        </NavLink>
      </div>
      <div className="navbar-right">
        
        <Link to="/services" className="navbar-link">
          Services
        </Link>
        <Link to="/about" className="navbar-link">
          About
        </Link>
        <Link to="/contact" className="navbar-link">
          Contact
        </Link>
        <Link to="/register" className="navbar-button">
          Register
        </Link>
        <Link to="/login" className="navbar-button">
          Login
        </Link>
      </div>
    </nav>
  );
}

export { NavigationBar };

