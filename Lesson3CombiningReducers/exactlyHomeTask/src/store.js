import { createStore, combineReducers } from 'redux';
import languageReducer from './language.reducer';
import productReducer from './cart.reducer';
import userReducer from './user.reducer';

const appReducer = combineReducers({
  language: languageReducer,
  user: userReducer,
  cart: productReducer,
});

const store = createStore(appReducer);
export default store;
