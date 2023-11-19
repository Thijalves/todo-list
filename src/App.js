import React, { useState } from "react";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, name: "Task 1", completed: false },
    { id: 2, name: "Task 2", completed: true },
  ]);

  function handleAddTodo() {
    console.log("Add todo");
  }

  return (
    <>
      <TodoList taskList={todos} />
      <input type="text" />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button>Clear completed Todos</button>
    </>
  );
}

export default App;
