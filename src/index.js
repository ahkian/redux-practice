import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const initState = {
  level: 1
}

function reducer(state = initState, action){
  switch(action.type){
    case 'INCREMENT_LEVEL':
      return {...state, level: state.level + 1}
    case 'DECREMENT_LEVEL':
      return {...state, level: state.level - 1}
    case 'SET_LEVEL':
      return {...state, level: action.payload}
    default:
      return state
  }
}

const store = createStore(reducer)

console.log("store", store, store.getState());

let action1 = {
  type: "INCREMENT_LEVEL",
  payload:""
}

let action2 = {
  type: "DECREMENT_LEVEL",
  payload:""
}

let action3 = {
  type: "SET_LEVEL",
  payload: 3
}

const dispatchWithLog = (store) => {
  const rawDispatch = store.dispatch;
  return (action) => {
    console.group("DISPATCH");
    console.log('%c state before dispatch', 'color: red', store.getState())
    const returnValue = rawDispatch(action);
    console.log('%c state after dispatch', 'color: red', store.getState())
    console.groupEnd();
    return returnValue;
  }
}

store.dispatch = dispatchWithLog(store)

store.dispatch(action3)
store.dispatch(action2)
store.dispatch(action1)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
