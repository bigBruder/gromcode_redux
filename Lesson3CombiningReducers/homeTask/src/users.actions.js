export const ADD = 'USER/ADD';
export const DELETE = 'USER/DELETE';
export const UPDATE = 'USER/UPDATE';

export const addUser = userData => ({
  type: ADD,
  payload: {
    userData,
  },
});

export const deleteUser = userId => ({
  type: DELETE,
  payload: {
    userId,
  },
});

export const updateUser = (userId, userData) => ({
  type: UPDATE,
  payload: {
    userId,
    userData,
  },
});
