export const ADD_USER = 'ADD/USER';
export const DELETE_USER = 'DELETE/USER';

export const setUser = userData => ({
  type: ADD_USER,
  payload: {
    userData,
  },
});

export const removeUser = () => ({
  type: DELETE_USER,
});
