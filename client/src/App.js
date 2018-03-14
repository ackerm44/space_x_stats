import React, { Component } from 'react';
import {BrowserRouter as Router, NavLink, Route} from 'react-router-dom'
import './App.css';
import LatestLaunch from './Launches/LatestLaunch'
import Rockets from './containers/Rockets'
import Launchpads from './containers/Launchpads'
import UpcomingLaunches from './containers/UpcomingLaunches'

class App extends Component {



  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={LatestLaunch} />
          <Route exact path="/rockets" component={Rockets} />
          <Route exact path="/launchpads" component={Launchpads} />
          <Route exact path="/upcoming" component={UpcomingLaunches} />
        </div>
      </Router>
    );
  }
}

export default App;
