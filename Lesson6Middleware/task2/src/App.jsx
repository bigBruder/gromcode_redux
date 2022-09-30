import React from 'react';
import { Provider } from 'react-redux';
import UserInfo from './users/UserInfo';
import SearchField from './users/SearchField';
import store from './store';

const App = () => (
  <Provider store={store}>
    <div className="page"></div>
    <UserInfo />
    <SearchField />
  </Provider>
);

export default App;
