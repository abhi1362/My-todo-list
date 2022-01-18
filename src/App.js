import React from 'react';
import './App.css';
import ToDoList from './components/toDoList/ToDoList.js';

const App = () =>{
  return (
    <div className="App">
      <header>
        <h1>TO DO LIST</h1>
      </header>
      <ToDoList />
    </div>
  );
}

export default App;
