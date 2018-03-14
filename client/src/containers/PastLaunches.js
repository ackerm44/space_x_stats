import React, { Component } from 'react'
import { connect } from 'react-redux'
import Launch from '../components/Launch'
import { pastLaunchesFetchData } from '../actions/pastLaunches'

class PastLaunches extends Component {
  componentDidMount() {
    this.props.fetchData('https://api.spacexdata.com/v2/launches')
  }

  render() {
    return (
      <div>
        {this.props.pastLaunches.map(launch => <Launch launch={launch}/>)}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    pastLaunches: state.pastLaunches,
    hasErrored: state.pastLaunchesHasErrored,
    isLoading: state.pastLaunchesIsLoading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchData: (url) => dispatch(pastLaunchesFetchData(url))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PastLaunches)
