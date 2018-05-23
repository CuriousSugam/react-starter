import React from 'react';
import { connect } from 'react-redux';

import * as currentUserActions from '../actions/currentUserActions';

const ListUsers = ({ users, onClick }) => (
  <ul>
    {
      users.map((user, i) => <li key={i} onClick={() => onClick(user.id)}>{user.username}</li>)
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
