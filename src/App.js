import React, { useState, useRef } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  function handleAddTodo(e) {
    // Save typed info
    const name = todoNameRef.current.value;
    if (name === "") return;
    // Update todoList
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false }];
    });
    // Clear input field
    todoNameRef.current.value = "";
  }

  return (
    <>
      <TodoList taskList={todos} />
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button>Clear completed Todos</button>
    </>
  );
}

export default App;
