import React, { Component } from 'react';

import './App.css';
import AddUserForm from './components/userForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddUserForm/>
      </div>
    );
  }
}

export default App;
