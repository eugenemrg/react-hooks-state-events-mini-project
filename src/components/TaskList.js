import React from "react";
import Task from "./Task";

function TaskList({tasks, deleteTask}) {
  return (
    <div className="tasks">
      {tasks.map( (task, index) => {
        return <Task key={index} text={task.text} category={task.category} deleteTask={deleteTask}/>
      })}
    </div>
  );
}

export default TaskList;
