import React from 'react';

const TodoItem = ({ task, onDelete, onComplete }) => {
  return (
    <div className="todo-item">
      <span className={task.completed ? 'completed' : ''}>{task.text}</span>
      <button onClick={() => onDelete(task.id)}>Delete</button>
      <button onClick={() => onComplete(task.id)}>Complete</button>
    </div>
  );
};

export default TodoItem;
