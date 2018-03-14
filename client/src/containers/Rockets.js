import React, { Component } from 'react';
import { connect } from 'react-redux';
import { rocketsFetchData } from '../actions/rockets';
import Rocket from '../components/Rocket'


class Rockets extends Component {
  state = {
    rockets: []
  }

  componentDidMount() {
    this.props.fetchData('/api/rockets')
  }

  render() {
    // if (this.props.rockets.length !== 0) {
      return (
        <div>
          {this.props.rockets.map(rocket => <Rocket rocket={rocket} />)}
        </div>
      )
    // }
    // return (
    //   <div>loading </div>
    // )

  }
}

const mapStateToProps = state => {
  return {
    rockets: state.rockets,
    hasErrored: state.rocketsHasErrored,
    isLoading: state.rocketsIsLoading
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(rocketsFetchData(url))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Rockets)
