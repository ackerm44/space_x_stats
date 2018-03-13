import React, { Component } from 'react';
import './App.css';
import LatestLaunch from './Launches/LatestLaunch'

class App extends Component {
  render() {
    return (
      <div className="App">
        <LatestLaunch />
      </div>
    );
  }
}

export default App;
