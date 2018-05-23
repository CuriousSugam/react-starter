import { combineReducers } from 'redux';

import todoReducer from './todoReducers';
import userReducer from './userReducer';
import currentUserReducer from './currentUserReducer';

export default combineReducers({
  todo: todoReducer,
  user: userReducer,
  currentUser: currentUserReducer,
});
