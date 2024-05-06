// eslint-disable-next-line no-unused-vars
import { useState } from "react";

import { TaskPhotoProfile } from "../../components/task/taskPhotoProfile";
import { TaskWelcome } from "../../components/task/taskWelcome";
import { TaskList } from "../../components/task/taskList";
import { TaskItem } from "../../components/task/taskItem";
import { TaskAdd } from "../../components/task/taskAdd";
import { TaskProgress } from "../../components/task/taskProgress";
import { TaskSearch } from "../../components/task/taskSearch";

import { Link } from "react-router-dom";

import "./task.css";

const defaultTodos = [
  { text: "Cortar cebolla", completed: true },
  { text: "Tomar el Curso de Intro a React.js", completed: false },
  { text: "Llorar con la Llorona", completed: false },
  { text: "LALALALALA", completed: false },
];

export const TaskPage = () => {
  return (
    <div className="task-container">
      {/* Head */}
      <nav className="task-navbar">
        <div className="photo">
          <TaskPhotoProfile />
          <TaskWelcome />
        </div>

        <div className="login">
          <Link to="/">Exit</Link>
        </div>
      </nav>

      <section className="search">
        <TaskSearch />
      </section>

      {/* Body */}
      <article className="task-content">
        {/* content */}
        <section className="task-list">
          <TaskList>
            {defaultTodos.map((todo) => (
              <TaskItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
              />
            ))}
          </TaskList>
        </section>

        <section className="task-view">
          <div className="task-progress">
            <TaskProgress />
          </div>

          <div className="task-create">
            <TaskAdd />
          </div>
        </section>
      </article>
    </div>
  );
};
