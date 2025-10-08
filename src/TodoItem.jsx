import React from 'react';

function TodoItem({ task, onToggle, onDelete }) {
  return (
    <li
      className={task.completed ? 'completed' : ''}
      onClick={() => onToggle(task.id)}
    >
      <span>{task.text}</span>
      <button className="delete-btn" onClick={(e) => {
        e.stopPropagation();
        onDelete(task.id);
      }}>✖</button>
    </li>
  );
}

export default TodoItem;
