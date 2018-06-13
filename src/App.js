import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import CoinCointainer from './Components/CoinContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <CoinCointainer />
      </div>
    );
  }
}

export default App;
