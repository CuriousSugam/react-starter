import { combineEpics } from 'redux-observable';

import todoEpics from './todoEpics';

export default combineEpics(
    todoEpics
);