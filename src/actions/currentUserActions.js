export const SET_CURRENT_USER = 'SET_CURRENT_USER';

export const setCurrentUser = id => ({
  type: SET_CURRENT_USER,
  payload: {
    id
  },
});
