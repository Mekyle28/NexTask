import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask, fetchTasks } from "../../store/taskSlice";
import "./TaskForm.scss"

const TaskForm = () => {

  const [title, setTitle] = useState(""); 
  const dispatch = useDispatch();


  const handleSubmit = async (e) => {
    e.preventDefault(); 
    if (!title) {
      alert("Please enter a task title.");
      return;
    }

    const newTask = {
      id: Date.now(),
      title,
      completed: false,
    };

    await dispatch(addTask(newTask));


    dispatch(fetchTasks());

    
    setTitle('');
  };

  return (
<div className="task-form">
  <h1>Add A New Task</h1>
  <form onSubmit={handleSubmit}>
    <div>
      <input
        type="text"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter task"
        className="task-input"
      />
    </div>
    <button type="submit" className="task-button">Add Task</button>
  </form>
</div>
  );
};

export default TaskForm;