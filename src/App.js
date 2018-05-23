import React, { Component } from 'react';

import './App.css';
import AddUserForm from './components/userForm';
import ListUsers from './components/listUsers';
import TodoForm from './components/todoForm';
import TodoList from './components/listTodos';

class App extends Component {
  render() {
    return (
      <div className="App" style={{
        margin: '10px',
        display: 'flex',
        padding: '10px',
      }}>
        <div style={{
          border: '1px solid #eee',
          maxWidth: '350px',
          height: '100vh',
        }}>
          <AddUserForm/>
          <ListUsers/>
        </div>
        <div className="todos" style={{ width: '500px', textAlign: 'center', border: '1px solid #eee'}}>
          <TodoForm/>
          <TodoList />
        </div>
      </div>
    );
  }
}

export default App;
