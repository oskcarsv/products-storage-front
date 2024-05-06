/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";

const TaskWelcome = () => {
  const username = localStorage.getItem("username");
  console.log("Username from localStorage:", username);

  return (
    <div className="task-photo-profile">
      <h1 className="task-title">Welcome 👋!</h1>
      <h2>{username}</h2>
    </div>
  );
};

export { TaskWelcome };
