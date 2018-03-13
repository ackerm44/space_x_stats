import React, { Component } from 'react';
import './App.css';
import LatestLaunch from './Launches/LatestLaunch'
import Rockets from './containers/Rockets'

class App extends Component {



  render() {
    return (
      <div className="App">
        <LatestLaunch />
        <Rockets />
      </div>
    );
  }
}

export default App;
