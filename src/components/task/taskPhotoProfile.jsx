// eslint-disable-next-line no-unused-vars
import { useState } from "react";

import userIcon from "../../assets/taskImg/user-icon.png";

const TaskPhotoProfile = () => {
  return (
    <div className="task-photo-profile">
      <img src={userIcon} alt="Photo Profile"  className="photo-profile"/>
    </div>
  );
};

export { TaskPhotoProfile };
