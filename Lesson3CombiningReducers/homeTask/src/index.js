import store from './store';
import { addUser, deleteUser } from './users.actions';
import { increment, decrement, reset } from './counter.actions';

store.dispatch(addUser({ name: 'Roman', id: 1 }));
store.dispatch(addUser({ name: 'Roman', id: 2 }));
store.dispatch(deleteUser(1));
store.dispatch(increment());
store.dispatch(reset());
store.dispatch(decrement());

console.log(store.getState());
