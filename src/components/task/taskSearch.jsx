/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import "./taskSearch.css";

const TaskSearch = () => {
  return (
    <div className="task-search">
      <input placeholder="Search" className="TodoSearch" />{" "}
    </div>
  );
};

export { TaskSearch };
