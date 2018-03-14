import React, { Component } from 'react';
import {BrowserRouter as Router, NavLink, Route} from 'react-router-dom'
import './App.css';
import LatestLaunch from './Launches/LatestLaunch'
import Rockets from './containers/Rockets'

class App extends Component {



  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={LatestLaunch} />
          <Route exact path="/rockets" component={Rockets} />
        </div>
      </Router>
    );
  }
}

export default App;

// const App = (props) =>
//   <Router>
//     <div>
//     // NavLink
//       <Route exact path="/" render={() => <h3>Welcome to the Pets List App</h3>} />
//       <Route path="/pets" component={PetsPage} />
//     </div>
//   </Router>;
//
// export default App;
