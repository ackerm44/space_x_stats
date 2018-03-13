import React, {Component} from 'react'
import { connect } from 'react-redux';
import { latestLaunchFetchData } from '../actions/latestLaunch';


class LatestLaunch extends Component {

  componentDidMount() {
    this.props.fetchData('https://api.spacexdata.com/v2/launches/latest');
  }


  render() {
    if (this.props.hasErrored) {
      return <p>Sorry! There was an error loading the latest Launch</p>;
    }

    if (this.props.isLoading) {
      return <p>Loading…</p>;
    }

    return (
      <div>
        <h1> Next Launch </h1>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    latestLaunch: state.launch,
    hasErrored: state.latestLaunchHasErrored,
    isLoading: state.latestLaunchIsLoading
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(latestLaunchFetchData(url))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(LatestLaunch)
