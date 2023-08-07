import React from "react";

function Task({text, category, deleteTask}) {

  function handleTaskDelete() {
    deleteTask(text)
  }

  return (
    <div className="task">
      <div className="label">{text}</div>
      <div className="text">{category}</div>
      <button className="delete" onClick={handleTaskDelete}>X</button>
    </div>
  );
}

export default Task;
