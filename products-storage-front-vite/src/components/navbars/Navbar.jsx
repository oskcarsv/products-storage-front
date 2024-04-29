import React from "react";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>Logo</h1>
      </div>
      <ul className="navbar-links">
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Acerca de</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
    </nav>
  );
};
