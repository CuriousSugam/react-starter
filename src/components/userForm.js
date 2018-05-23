import React from 'react';
import { connect } from 'react-redux';
import { compose, withState, withHandlers } from 'recompose';

import { addUser } from '../actions/userActions';

const UserForm = ({ onClick, username, onChange }) => (
    <form>
      <input type="text" name="user" value={username} onChange={onChange} placeholder="Enter User's name"/>
      <button onClick={onClick}>Add</button>
    </form>
);

export default compose(
  connect(null, dispatch => ({
    addUserToApp(username) {
      dispatch(addUser(username));
    }
  })),
  withState('username', 'updateUsername', ''),
  withHandlers({
    onClick: ({ username, addUserToApp, updateUsername }) => e => {
      e.preventDefault();
      addUserToApp(username);
      updateUsername('');
    },
    onChange: ({ updateUsername }) => event => {
      updateUsername(event.target.value);
    }
  })
)(UserForm)
