import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [tasks, setTasks] = useState(TASKS)
  const [categories, setCategories] = useState(CATEGORIES)
  const [selected, setSelected] = useState('')
  const [filteredTasks, setFilteredTasks] = useState([])

  function handleDeleteTask(task) {
    setTasks(tasks.filter(taskObj => {
      return taskObj.text !== task
    }))
  }

  function filterByCategory(category) {
    setSelected(category)
    if (category === 'All') {
      setFilteredTasks([...tasks].filter(taskObj => {
        return taskObj
      }))
    } else {
      setFilteredTasks([...tasks].filter(taskObj => {
        return taskObj.category === category
      }))
    }
  }

  function onTaskFormSubmit(formData) {
    setTasks([...tasks, formData])
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={categories} filterByCategory={filterByCategory} />
      <NewTaskForm categories={categories} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={selected === '' ? tasks : filteredTasks} deleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;
