import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {
  increment = () => {
    this.props.dispatch({
      type: 'INCREMENT_LEVEL'
    })
  }

  decerement = () => {
    this.props.dispatch({
      type: 'DECREMENT_LEVEL'
    })
  }

  reset = () => {
    this.props.dispatch({
      type: 'SET_LEVEL',
      payload: 1
    })
  }

  render() {
    console.log(this.props);
    return (
      <div className="App">
        <button onClick={this.increment}>Click to Increment Level</button>
        <button onClick={this.decerement}>Click to Decrement Level</button>
        <button onClick={this.reset}>Click to Reset Level</button>
      </div>
    );
  }
}


export default connect()(App);
