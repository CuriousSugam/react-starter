import * as userActions from '../actions/userActions';

const INITIAL_STATE = {
  user: {}
};

const userReducer = (state = INITIAL_STATE.user, action) => {
  switch(action.type) {
    case userActions.USER_ADD: {
      const id = Object.keys(state).length + 1;
      return {
        ...state,
        [id]: {
          id: id,
          username: action.payload
        }
      }
    }
    default: return state;
  }
};

export default userReducer;
