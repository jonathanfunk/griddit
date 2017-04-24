import React, { Component } from 'react';
import { connect } from 'react-redux'
import { selectSubreddit, fetchPostsIfNeeded, invalidateSubreddit } from './redux/actions';
import './styles/App.css';
import Header from './components/Header';
import Posts from './components/Posts';
import CircularProgress from 'material-ui/CircularProgress';

class App extends Component {

  constructor() {
    super()
    this.state = {
      subreddit: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { dispatch, selectedSubreddit } = this.props
    dispatch(fetchPostsIfNeeded(selectedSubreddit))
  }

  componentDidUpdate(prevProps) {
    if (this.props.selectedSubreddit !== prevProps.selectedSubreddit) {
      const { dispatch, selectedSubreddit } = this.props
      dispatch(fetchPostsIfNeeded(selectedSubreddit))
    }
  }
  
  handleChange(e) {
    this.setState({subreddit: e.target.value});
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.dispatch(selectSubreddit(this.state.subreddit))
    this.props.dispatch(fetchPostsIfNeeded(this.state.subreddit))
  }
  
  render() {

    const { selectedSubreddit, posts, isFetching, didInvalidate } = this.props

    return (
      <div className="App">
        <Header 
          value={selectedSubreddit}
          clickSubmit={this.handleSubmit}
          onChange={this.handleChange}
        />
        <section className="griddit-section">
        {isFetching && !didInvalidate && posts.length === 0 &&
          <div>
            <CircularProgress size={60} thickness={7} />
          </div>
        }
        {didInvalidate &&
          <h2>Oops! Failed request for {selectedSubreddit}.</h2>
        }
        {posts.length > 0 && !didInvalidate &&
          <div style={{ opacity: isFetching ? 0.5 : 1 }}>
            <Posts posts={posts} />
          </div>
        }
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { selectedSubreddit, postsBySubreddit } = state
  const {
    isFetching,
    didInvalidate,
    items: posts
  } = postsBySubreddit[selectedSubreddit] || {
    isFetching: true,
    items: []
  }
  return {
    selectedSubreddit,
    posts,
    isFetching,
    didInvalidate,
  }
}

export default connect(mapStateToProps)(App)
