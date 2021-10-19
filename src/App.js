import React from 'react';
import Add from './component/Add';
import List from './component/List';
import './css/style.css';

function App() {
  return (
    <>
      <div className="todoList">
        <h1>To-Do List</h1>
        <Add />
        <List />
      </div>
    </>
  );
}

export default App;