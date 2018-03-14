import React, { Component } from 'react'
import { connect } from 'react-redux'
import { upcomingLaunchesFetchData } from '../actions/upcomingLaunches'
import Launch from '../components/Launch'

class UpcomingLaunches extends Component {
  componentDidMount() {
    this.props.fetchData('https://api.spacexdata.com/v2/launches/upcoming')
  }

  render() {
    return (
      <div>
        {this.props.upcomingLaunches.map(launch => <Launch launch={launch} />)}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    upcomingLaunches: state.upcomingLaunches,
    hasErrored: state.upcomingLaunchesHasErrored,
    isLoading: state.upcomingLaunchesIsLoading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchData: (url) => dispatch(upcomingLaunchesFetchData(url))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpcomingLaunches)
