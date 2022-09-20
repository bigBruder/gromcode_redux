import { ADD, DELETE } from './user.actions';

const initialState = {
  user: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        user: action.payload,
      };
    case DELETE:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

export default userReducer;
