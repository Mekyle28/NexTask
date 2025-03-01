import "./TaskItem.scss";
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, updateTask } from '../../store/taskSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function TaskItem({ task }) {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(task.title);
  const dispatch = useDispatch();

  const handleEditClick = () => setIsEditing(!isEditing);
  const handleInputChange = (e) => setUpdatedTitle(e.target.value);

  const handleSaveClick = () => {
    dispatch(updateTask({ id: task.id, title: updatedTitle, completed: task.completed }));
    setIsEditing(false);
  };

  const handleToggleComplete = () => {
    dispatch(updateTask({ id: task.id, title: task.title, completed: !task.completed }));
  };

  const handleDelete = () => dispatch(deleteTask(task.id));

  return (
  <div className="task-list__item">
    <input type="checkbox" checked={task.completed} onChange={handleToggleComplete} />
    
    {isEditing ? (
      <input type="text" value={updatedTitle} onChange={handleInputChange} className="task-edit-input"/>
    ) : (
      <h1>{task.title}</h1>
    )}

    {/* Wrap both the edit and delete buttons inside a container */}
    <div className="button-container">
      <div className="edit-save-button">
        {isEditing ? (
          <button className="save" onClick={handleSaveClick}>Save</button>
        ) : (
          <button className="edit" onClick={handleEditClick}>Edit</button>
        )}
      </div>

      <div className="delete-button">
        <span className="delete" onClick={handleDelete}>
          <FontAwesomeIcon icon={faXmark} />
        </span>
      </div>
    </div>
  </div>
  );
}

export default TaskItem;
