import { createStore } from 'redux';
import usersPageReducer from './users/users.reducer';

const store = createStore(
  usersPageReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
export default store;
