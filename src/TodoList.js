import React from "react";
import Task from "./Task";

export default function TodoList({ taskList, toggleTodo }) {
  return taskList.map((task) => {
    return <Task key={task.id} toggleTodo={toggleTodo} task={task} />;
  });
}
