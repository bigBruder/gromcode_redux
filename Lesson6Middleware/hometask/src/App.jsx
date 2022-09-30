import React from 'react';
import { Provider } from 'react-redux';
import Weather from './weather/Weather';
import store from './store';

const App = () => (
  <Provider store={store}>
    <div className="page"></div>
    <Weather />
  </Provider>
);

export default App;
