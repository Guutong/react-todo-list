import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form className="todo-list">
          <ul>
            <div className="todo">
              <div className="checkbox" />
              <input type="text" value="Todo one" />
            </div>
          </ul>
        </form>
      </header>
    </div>
  );
}

export default App;
