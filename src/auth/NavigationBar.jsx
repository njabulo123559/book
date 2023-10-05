import React from "react";
import { NavLink } from "react-router-dom"; // Import NavLink for navigation
import { Link, useNavigate } from 'react-router-dom';
import { auth } from "../firebase";


function NavigationBar() {
  
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.signOut();
    navigate('/login');
    // refreshPage
    window.location.reload(false);
  };

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

        {auth.currentUser ? (
          <button style={{color: 'white'}} onClick={handleLogout} className="navbar-button">
            Logout
          </button>
        ) : (
          <>
            <Link to="/register" className="navbar-button">
              Register
            </Link>
            <Link to="/login" className="navbar-button">
              Login
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export { NavigationBar };

