export const ADD = "USER/ADD";
export const DELETE = "USER/DELETE";

export const addUser = (obj) => {
    return {
      type: ADD,
      payload: obj,
    };
  };
  
export const deleteUser = (id) => {
    return {
      type: DELETE,
      payload: id,
    };
  };