// eslint-disable-next-line no-unused-vars
import React from "react";
import "../styles/Navbar.css";

export const Navbar = () => {
  var saved = localStorage.getItem("user");

  const handleLogout = () => {
    localStorage.removeItem('user');
    saved = null;
    window.location.href = './'
  }

  return (
    <nav className="navbar">
      <div className="navbar-logo imgNav">
        <div className="imgNav"></div>
      </div>
    </nav>
  );
};
