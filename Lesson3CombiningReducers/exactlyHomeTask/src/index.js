import store from './store';
import { setUser, removeUser } from './user.actions';
import { addProduct, removeProduct } from './cart.actions';
import { setLanguage } from './language.actions.js';

store.dispatch(setLanguage('ua'));
store.dispatch(setUser({ name: 'Roman' }));
store.dispatch(addProduct({ name: 'Limon', id: 2 }));
// store.dispatch(removeUser());
// store.dispatch(removeProduct(2));

console.log(store.getState());
