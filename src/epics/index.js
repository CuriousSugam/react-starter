import { combineEpics } from 'redux-observable';

import todoEpics from './todoEpics';
import userEpics from './userEpic';

export default combineEpics(
  todoEpics,
  userEpics
);
