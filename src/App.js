import React, { Component } from 'react';
import './App.css';
import { Header, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import New from './components/newComponent.js';

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
        {this.props.level > 0 ? <Header as='h1' textAlign='center' style={{color: "green"}}>Level: {this.props.level}</Header> : (this.props.level === 0 ? <Header as='h1' textAlign='center'>Level: {this.props.level}</Header> : <Header as='h1' textAlign='center' style={{color: "red"}}>Level: {this.props.level}</Header>)}
        <Button id="increment" onClick={this.increment}>Click to Increment Level</Button>
        <Button id="decrement" onClick={this.decerement}>Click to Decrement Level</Button>
        <Button id="reset" onClick={this.reset}>Click to Reset Level</Button>
        <New />
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
