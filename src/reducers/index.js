import { combineReducers } from 'redux';

import todoReducer from './todoReducers';
import userReducer from './userReducer';

export default combineReducers({
  todo: todoReducer,
  user: userReducer,
});
