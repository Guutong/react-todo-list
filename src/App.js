import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    {
      content: "Pickup dry cleaning",
      isCompleted: true
    },
    {
      content: "Get haircut",
      isCompleted: false
    },
    {
      content: "Build a todo app in React",
      isCompleted: false
    }
  ]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form className="todo-list">
          <ul>
            {todos.map((todo, i) => (
              <div className="todo">
                <div className="checkbox" />
                <input type="text" value={todo.content} />
              </div>
            ))}
          </ul>
        </form>
      </header>
    </div>
  );
}

export default App;
