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
        {this.props.level > 0 ? <h1 style={{color: "green"}}>Level: {this.props.level}</h1> : this.props.level === 0 ? <h1>Level: {this.props.level}</h1> : <h1 style={{color: "red"}}>Level: {this.props.level}</h1>}
        <button onClick={this.increment}>Click to Increment Level</button>
        <button onClick={this.decerement}>Click to Decrement Level</button>
        <button onClick={this.reset}>Click to Reset Level</button>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    level: state.level
  }
}
export default connect(mapStateToProps)(App);
