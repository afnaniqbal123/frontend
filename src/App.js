import React from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskLists';
import './App.css';

const App = () => {
  const handleTaskAdded = () => {
    // Refresh task list after adding a new task
    window.location.reload();
  };

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <TaskForm onTaskAdded={handleTaskAdded} />
      <TaskList />
    </div>
  );
};

export default App;
