import { Observable } from 'rxjs/Observable';
import { combineEpics } from 'redux-observable';


import * as userActions from '../actions/userActions';
import * as currentUserActions from '../actions/currentUserActions';

export const addCurrentUserEpic = (action$, store) => {
  return action$
    .ofType(userActions.USER_ADD)
    .mergeMap(({ payload }) => {
      const currentUser = store.getState().currentUser;
      if(!currentUser) {
        return Observable.of(
          currentUserActions.setCurrentUser(1)
        )
      }

      return Observable.of('noop')
    })
};

export default combineEpics(
  addCurrentUserEpic
)
