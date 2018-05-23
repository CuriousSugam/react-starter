import * as currentUserActions from '../actions/currentUserActions';

const INITIAL_STATE = null;

const currentUserReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case currentUserActions.SET_CURRENT_USER: {
      return action.payload.id
    }
    default: return state;
  }
};

export default currentUserReducer;
