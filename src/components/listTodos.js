import React from 'react';
import { connect } from 'react-redux';

const ListTodos = ({ todos, onClick }) => (
  <ul>
    {
      todos.map((todo, i) => <li key={i}>{todo}</li>)
    }
  </ul>
);

export default connect(
  ({ todo }) => ({
    todos: Object.values(todo).map(i => i.todo)
  })
)(ListTodos);
