import{INCREMENT_LEVEL, DECREMENT_LEVEL, SET_LEVEL} from './types.js';

const initState = {
  level: 1
}

export default function reducer(state = initState, action){
  switch(action.type){
    case INCREMENT_LEVEL:
      return {...state, level: state.level + 1}
    case DECREMENT_LEVEL:
      return {...state, level: state.level - 1}
    case SET_LEVEL:
      return {...state, level: action.payload}
    default:
      return state
  }
}
