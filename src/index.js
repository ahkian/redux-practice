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

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
