import React, { Component } from 'react';
import Launchpad from '../components/Launchpad'
import { connect } from 'react-redux'
import { launchpadsFetchData} from '../actions/launchpads'

class Launchpads extends Component {
  componentDidMount() {
    this.props.fetchData('/api/launchpads')
  }

  render() {
    return (
      <div>
        {this.props.launchpads.map(launchpad => <Launchpad launchpad={launchpad} />)}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    launchpads: state.launchpads,
    hasErrored: state.launchpadsHasErrored,
    isLoading: state.launchpadsIsLoading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchData: (url) => dispatch(launchpadsFetchData(url))
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Launchpads)
