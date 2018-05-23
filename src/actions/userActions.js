export const USER_ADD = 'USER_ADD';

export const addUser = userName => ({
  type: USER_ADD,
  payload: userName
});
