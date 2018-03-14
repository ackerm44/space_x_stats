import React, { Component } from 'react'
import { connect } from 'react-redux'

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
