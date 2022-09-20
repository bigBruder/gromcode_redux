export const ADD = 'USER/ADD';
export const DELETE = 'USER/DELETE';

export const setUser = userData => ({
  type: ADD,
  payload: {
    userData,
  },
});

export const removeUser = () => ({
  type: DELETE,
});
