import React, { useState } from 'react';
import TodoItem from './TodoItem';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [inputTask, setInputTask] = useState('');

  const addTask = () => {
    if (inputTask.trim() !== '') {
      const newTask = {
        id: Math.random(),
        text: inputTask,
        completed: false,
      };
      setTasks([...tasks, newTask]);
      setInputTask('');
    }
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const completeTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="Add a new task"
        value={inputTask}
        onChange={(e) => setInputTask(e.target.value)}
      />
      <button onClick={addTask}>Add</button>
      <div className="task-list">
        {tasks.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            onDelete={deleteTask}
            onComplete={completeTask}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
