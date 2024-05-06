// eslint-disable-next-line no-unused-vars
import { useState } from "react";

import { TaskPhotoProfile } from "../../components/task/taskPhotoProfile";
import { TaskWelcome } from "../../components/task/taskWelcome";
import { TaskList } from "../../components/task/taskList";
import { TaskItem } from "../../components/task/taskItem";
import { TaskAdd } from "../../components/task/taskAdd";
import { TaskProgress } from "../../components/task/taskProgress";

import "./task.css";

export const TaskPage = () => {
  return (
    <div className="task-container">
      {/* Head */}
      <nav className="task-navbar">
        <TaskPhotoProfile />
        <TaskWelcome />
      </nav>

      {/* Body */}
      <article className="task-content">
        {/* content */}
        <section className="task-list">
          <TaskList>
            <div className="todo-items">
              <TaskItem />
            </div>
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
