import React from 'react';
import { connect } from 'react-redux';

import * as currentUserActions from '../actions/currentUserActions';

const ListUsers = ({ users, onClick }) => (
  <ul style={{
    listStyle: 'none',
    paddingLeft: 0,
  }}>
    {
      users.map((user, i) => <li  style={{
        border: '1px solid #eee',
        borderRadius: '3px',
        padding: '8px 12px',
        cursor: 'pointer',
      }} key={i} onClick={() => onClick(user.id)}>{user.username}</li>)
    }
  </ul>
);

export default connect(
  ({ user }) => ({
    users: Object.values(user)
  }),
  dispatch => ({
    onClick(id) {
      dispatch(currentUserActions.setCurrentUser(id));
    }
  })
)(ListUsers);
