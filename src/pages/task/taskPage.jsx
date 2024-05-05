// eslint-disable-next-line no-unused-vars
import { useState } from "react";

import "./task.css";

export const TaskPage = () => {
  return (

    <div className="task-container">
      {/* Head */}
      <nav className="task-navbar">
          <h1>Task</h1>  
      </nav>  

      {/* Body */}
      <article className="task-content">

        {/* content */}
        <section className="task-list">

        </section>

        <section className="task-view">

          <div className="task-progress">
          </div>

          <div className="task-create">
          </div>

        </section>

      </article>
    </div>
  );
};