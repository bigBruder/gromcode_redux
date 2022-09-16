import React, { Component } from 'react';
import Header from './Header';
// import { themes, ThemeContext } from './userData-context';

class App extends Component {
  state = {
    userData: {
      name: 'Nikola Tesla',
      avatar_url: 'https://avatars3.githubusercontent.com/u10001',
    },
  };

  render() {
    return (
      <div className="page">
        <Header />
      </div>
    );
  }
}

export default App;
