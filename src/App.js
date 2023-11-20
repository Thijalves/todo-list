import React, { useState, useRef } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

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

  function toggleTodo(id) {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodos);
  }

  function handleClear() {
    const newTodos = todos.filter((todo) => !todo.complete);
    setTodos(newTodos);
  }

  return (
    <div className="container">
      <div className="content">
        <div className="app-container">
          <TodoList taskList={todos} toggleTodo={toggleTodo} />
          <div className="input-container">
            <input ref={todoNameRef} type="text" />
            <button onClick={handleAddTodo}>Add</button>
            <button onClick={handleClear}>Clear</button>
          </div>
          <div>
            {todos.filter((todo) => !todo.complete).length} tarefa restante.
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
