import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';

const initState = {
  level: 1
}

function reducer(state = initState, action){
  let newState
  switch(action.type){
    case 'INCREMENT_LEVEL':
      return {...state, count: state.count + 1}
    case 'DECREMENT_LEVEL':
      return {...state, count: state.count - 1}
    default: return state
  }
}

const store = createStore(reducer)

console.log("store", store, store.getState());

let action = {
  type: "INCREMENT_LEVEL",
  payload:
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
