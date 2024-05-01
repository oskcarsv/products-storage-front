import React from "react";
import { Navbar } from "../../components/navbars/Navbar";
import { LoadingSpinner } from "../../components/LoadingSpinner";
import { Content } from "../../components/dashboard/Content";
import { Sidebar } from "../../components/navbars/Sidebar";


import "./mainPage.css"; // Asegúrate de tener este archivo CSS para los estilos de la página principal

export const MainPage = () => {
  const text = "¡Bienvenido a la página principal!";
  const isFetching = false; // Cambia a true si estás realizando alguna operación asincrónica

  if (isFetching) {
    return <LoadingSpinner />;
  }

  return (
    <div className="main-container">
      <Navbar />
      <div className="main-content">
        <Sidebar />
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
