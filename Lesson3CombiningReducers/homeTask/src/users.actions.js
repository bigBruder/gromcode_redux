export const ADD = 'USER/ADD';
export const DELETE = 'USER/DELETE';
export const UPDATE = 'USER/UPDATE';

export const addUser = userData => {
  return {
    type: ADD,
    payload: {
      userData,
    },
  };
};

export const deleteUser = id => {
  return {
    type: DELETE,
    payload: {
      userId,
    },
  };
};

export const updateUser = (id, userData) => {
  return {
    type: DELETE,
    payload: {
      userId,
      userData,
    },
  };
};
