import React from "react";
import "../styles/Navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>Logo</h1>
      </div>
      <ul className="navbar-links">
        <li><a href="#">Logueese aqui</a></li>
        <li><a href="#">Acceder</a></li>
      </ul>
    </nav>
  );
};
