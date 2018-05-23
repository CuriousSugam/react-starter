import React from 'react';
import { connect } from 'react-redux';
import { compose, withState, withHandlers } from 'recompose';

import { addTodo as addTodoAction } from '../actions/todoActions';

const TodoForm = ({ onClick, todo, onChange }) => (
  <form>
    <input type="text" name="todo" value={todo} onChange={onChange} placeholder="Enter todo..."/>
    <button onClick={onClick}>Add</button>
  </form>
);

export default compose(
  connect(
  ({ currentUser }) => ({
    currentUserId: currentUser
  }),
  dispatch => ({
    addTodo(todo, currentUserId) {
      dispatch(addTodoAction(todo, currentUserId));
    }
  })),
  withState('todo', 'updateTodo', ''),
  withHandlers({
    onClick: ({ todo, addTodo, updateTodo, currentUserId }) => e => {
      e.preventDefault();
      addTodo(todo, currentUserId);
      updateTodo('');
    },
    onChange: ({ updateTodo }) => event => {
      updateTodo(event.target.value);
    }
  })
)(TodoForm)
