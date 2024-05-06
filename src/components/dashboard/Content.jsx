// eslint-disable-next-line no-unused-vars
import React from "react";
import "../styles/Content.css";

import todoIcon from "../../assets/taskImg/todo-icon.png";
import welcomeImg from "../../assets/taskImg/welcome.gif";

export const Content = () => {
  return (
    <div className="main-content">
      <header className="m-header">
        <img
          src={todoIcon}
          alt="todo icon"
          className="logo"
          height="100px"
          width="100px"
        />
        <h1 className="logo-h1">Products Storage</h1>
      </header>

      <section className="s-welcome">
        <div className="welcome-text">
          <h1>Welcome to Products Storage</h1>
          <p className="p-welcome">
            Products Storage is a simple contact management system that allows
            you to manage your contacts with ease. You can add, edit, delete and
            view your contacts.
          </p>

          <div className="login">
            <button>start </button>
          </div>
        </div>
        <div className="welcome-img">
          <img
            src={welcomeImg}
            alt="welcome"
            height="400px"
            width="600px"
          />
        </div>
      </section>
    </div>
  );
};
