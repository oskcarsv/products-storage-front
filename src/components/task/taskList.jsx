/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";

const TaskList = ({ children }) => {
  return (
    <div className="task-list">
      <h1 className="task-title-list">Tasks</h1>
      <ul>{children}</ul>
    </div>
  );
};

export { TaskList };
