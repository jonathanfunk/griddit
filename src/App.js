import React, { Component } from 'react';
import { connect } from 'react-redux'
import { selectSubreddit, fetchPostsIfNeeded, invalidateSubreddit } from './redux/actions';
import './styles/App.css';
import Input from './components/input';

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
    console.log(this.state.subreddit)
    this.props.dispatch(selectSubreddit(this.state.subreddit))
    this.props.dispatch(fetchPostsIfNeeded(this.state.subreddit))
  }
  
  render() {

    const { selectedSubreddit, posts, isFetching, lastUpdated } = this.props

    console.log(selectedSubreddit)

    return (
      <div className="App">
        <Input 
          value={selectedSubreddit}
          clickSubmit={this.handleSubmit}
          onChange={this.handleChange}
        />
        <section className="griddit-section">
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { selectedSubreddit, postsBySubreddit } = state
  const {
    isFetching,
    lastUpdated,
    items: posts
  } = postsBySubreddit[selectedSubreddit] || {
    isFetching: true,
    items: []
  }
  return {
    selectedSubreddit,
    posts,
    isFetching,
    lastUpdated
  }
}

export default connect(mapStateToProps)(App)
