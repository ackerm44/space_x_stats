import React, { Component } from 'react';
import { connect } from 'react-redux'
// Import Article
// Import newsFetchData

class News extends Component {
  const newsUrl = 'https://newsapi.org/v2/everything?q=spacex AND mars NOT (trump OR apple)&language=en&source=google&sortBy=publishedAt&apiKey=614b5a9023a74032b623c6133eeedf5e'
  componentDidMount() {
    this.props.fetchData(newsUrl)
  }

  render() {
    return (
      <div>
        {this.props.news.map(article => <Article article={article}/>)}
      </div>
    )
  }
}

mapStateToProps = state => {
  return {
    news: state.news,
    hasErrored: state.newsHasErrored,
    isLoading: state.newsIsLoading
  }
}

mapDispatchToProps = dispatch => {
  return {
    fetchData: (url) => dispatch(newsFetchData(url))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(News)
