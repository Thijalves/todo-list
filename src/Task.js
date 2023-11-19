import React from "react";

export default function Task({ task, toggleTodo }) {
  function handleTodoClick() {
    toggleTodo(task.id);
  }

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={handleTodoClick}
        />
        {task.name}
      </label>
    </div>
  );
}
