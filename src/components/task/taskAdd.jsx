/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";

import addIcon from "../../assets/taskImg/add-icon.png";

const TaskAdd = () => {
  return (
    <div className="task-add">
      <button>
        <div className="task-add-content">
          <img
            src={addIcon}
            alt="Add Icon"
            className="add-icon"
            style={{ width: "100px", height: "100px", margin: "10px" }}
          />
          <span>Add task</span>
        </div>
      </button>
    </div>
  );
};

export { TaskAdd };
