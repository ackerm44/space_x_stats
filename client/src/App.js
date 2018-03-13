import React, { Component } from 'react';
import './App.css';
import LatestLaunch from './Launches/LatestLaunch'
import Rocket from './components/Rocket'

class App extends Component {
  componentDidMount() {
    window.fetch('/api/rockets', {
      accept: 'application/json',
    }).then(res => res.json())
      .then(rockets => console.log(rockets))
  }


  render() {
    return (
      <div className="App">
        <LatestLaunch />

      </div>
    );
  }
}

export default App;
