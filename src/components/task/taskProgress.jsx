/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import "./taskProgress.css";

const TaskProgress = ({ total, completed }) => {
  return (
    <div className="task-progress">
      <h1 className="TodoCounter">
        Has completado <span>{completed}</span> de <span>{total}</span> TODOs
      </h1>
    </div>
  );
};

export { TaskProgress };
