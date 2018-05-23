import { Observable } from 'rxjs/Observable';
import { combineEpics } from 'redux-observable';


import * as todoActions from '../actions/todoActions';
import todoService from '../services/todoServices';

export const addTodoEpic = (action$, store) => 
    action$
        .ofType(todoActions.TODO_ADD)
        .mergeMap(() => Observable.of('noop'))

export default combineEpics(
    addTodoEpic
)