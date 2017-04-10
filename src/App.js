import React, { Component } from 'react';
import './styles/App.css';
import Input from './components/input';

class App extends Component {

  handleSubmit(e){
    e.preventDefault();
		console.log('Some subreddit.')
	}

  render() {
    return (
      <div className="App">
        <Input clickSubmit={this.handleSubmit}/>
        <section className="griddit-section">
        </section>
      </div>
    );
  }
}

export default App;
