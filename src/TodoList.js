import React from "react";
import Task from "./Task";

export default function TodoList({ taskList }) {
  return taskList.map((task) => {
    return <Task key={task.id} task={task} />;
  });
}
