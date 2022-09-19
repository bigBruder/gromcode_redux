import { createStore, combineReducers } from 'redux';
import userReducer from './users.reducer';
import counterReducer from './counter.reducer';

const appReducer = combineReducers({
  counter: counterReducer,
  users: userReducer,
});

const store = createStore(appReducer);
export default store;
