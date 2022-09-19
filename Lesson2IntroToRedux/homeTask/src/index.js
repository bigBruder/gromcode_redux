
import store from './store';
import {addUser, deleteUser} from './users.actions'

store.dispatch(addUser({name: 'Roman', id: 1}));
store.dispatch(deleteUser(1));

console.log(store.getState())