// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Content.css";

import todoIcon from "../../assets/taskImg/todo-icon.png";
import welcomeImg from "../../assets/taskImg/welcome.gif";
import todoImg from "../../assets/taskImg/todo.gif";

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
            Products Storage is a simple todo-list system that allows you to
            manage your tasks ease. You can add, edit, delete and view your
            tasks.
          </p>

          <div className="login">
            <Link to="/task">Start</Link>
          </div>
        </div>
        <div className="welcome-img">
          <img src={welcomeImg} alt="welcome" height="400px" width="600px" />
        </div>
      </section>

      <section className="s-todo-list">
        <div className="container-todo">
          <div className="todo-img">
            <img src={todoImg} alt="welcome" height="600px" width="700px" />
          </div>
          <div className="todo-text">
            <h1>Todo list</h1>
            <p className="p-todo">
              A to-do list on a webpage is a feature that allows users to create
              and manage a list of tasks. It typically consists of a text field
              where users can enter the task name, a checkbox to mark the task
              as completed.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
