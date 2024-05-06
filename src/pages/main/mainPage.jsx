// eslint-disable-next-line no-unused-vars
import React from "react";
import { Navbar } from "../../components/navbars/Navbar";
import { Content } from "../../components/dashboard/Content";


import "./mainPage.css";

export const MainPage = () => {
  const text = "¡Bienvenido a la página principal!";

  return (
    <div className="main-container">
      <Navbar />
      <div className="main-content">
        <Content>
          <div className="text-container">
            <h1>{text}</h1>
          </div>
          <div>
            <h1>nose</h1>
          </div>
        </Content>
      </div>
    </div>
  );
};
