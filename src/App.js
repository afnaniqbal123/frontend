// src/App.js
import React from 'react';
import './App.css';
import TodoList from './components/TodoList';

const App = () => {
  return (
    <div className="container">
      <h1>React Todo List</h1>
      <TodoList />
    </div>
  );
};

export default App;
