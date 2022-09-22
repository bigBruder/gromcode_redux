import { createStore, combineReducers } from 'redux';
import userReducer from './users/users.reducer';

const appReducer = combineReducers({
  users: userReducer,
});

const store = createStore(appReducer);
export default store;
