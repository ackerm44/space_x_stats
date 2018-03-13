import React, { Component } from 'react';
import { connect } from 'react-redux';
import { rocketsFetchData } from '../actions/rockets';


class Rockets extends Component {
  state = {
    rockets: []
  }

  componentDidMount() {
    this.props.fetchData('/api/rockets')
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
