import { ADD, DELETE, UPDATE } from './users.actions';

const initialState = {
  usersList: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        usersList: state.usersList.concat(action.payload.userData),
      };
    case DELETE:
      return {
        ...state,
        usersList: state.usersList.filter(user => user.id !== action.payload.userId),
      };
    case UPDATE:
      return {
        ...state,
        usersList: state.usersList.map(user => {
          if (user.id === action.payload.userId) {
            return {
              ...user,
              ...action.payload.userData,
            };
          }
          return user;
        }),
      };
    default:
      return state;
  }
};

export default userReducer;
