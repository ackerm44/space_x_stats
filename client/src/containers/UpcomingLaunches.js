import React, { Component } from 'react'
import { connect } from 'react-redux'

class UpcomingLaunches extends Component {
  componentDidMount() {
    this.props.fetchData('https://api.spacexdata.com/v2/launches/upcoming')
  }

  render() {
    return (
      <div>
        {this.props.upcomingLaunches.map(launch => <Launch launches={this.props.upcomingLaunches})}
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
    fetchData: (url) => upcomingLaunchesFetchData(url)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpcomingLaunches)
