import React, { Component } from 'react';
import {BrowserRouter as Router, NavLink, Route} from 'react-router-dom'
import './App.css';
import LatestLaunch from './Launches/LatestLaunch'
import Rockets from './containers/Rockets'
import Launchpads from './containers/Launchpads'
import UpcomingLaunches from './containers/UpcomingLaunches'
import PastLaunches from './containers/PastLaunches'
import News from './containers/News'

class App extends Component {



  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={LatestLaunch} />
          <Route exact path="/rockets" component={Rockets} />
          <Route exact path="/launchpads" component={Launchpads} />
          <Route exact path="/upcoming" component={UpcomingLaunches} />
          <Route exact path="/past" component={PastLaunches} />
          <Route exact path='/news' component={News} />
        </div>
      </Router>
    );
  }
}

export default App;
