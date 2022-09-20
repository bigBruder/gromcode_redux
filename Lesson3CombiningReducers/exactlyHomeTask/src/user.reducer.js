import { ADD_USER, DELETE_USER } from './user.actions';

const initialState = {
  user: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        user: action.payload,
      };
    case DELETE_USER:
      return {
        name: null,
      };
    default:
      return state;
  }
};

export default userReducer;
