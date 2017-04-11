import React, { Component } from 'react';
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
  
  handleChange(event) {
    this.setState({subreddit: event.target.value});
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.subreddit)
  }
  
  render() {

    return (
      <div className="App">
        <Input 
          clickSubmit={this.handleSubmit}
          inputValue={this.handleChange}
        />
        <section className="griddit-section">
        </section>
      </div>
    );
  }
}

export default App;
