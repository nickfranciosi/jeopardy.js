import { combineReducers } from 'redux';
import { C } from './actions';

const score = (state = {}, action) => {
  switch(action.type) {
    case C.UPDATE_SCORE:
      if(state.id !== action.payload.id){
        return state;
      }
      return Object.assign({}, state, {value: state.value + action.payload.value})
    default:
      return state;
  }
}

const scores =  (state = [], action) => {
  switch(action.type){
    case C.INIT_GAME:
      return action.payload.map(player => ({id: player.id, value: action.payload.value || 0}))
    case C.UPDATE_SCORE:
      return state.map(s => score(s, action));
    default:
      return state;
  }
}

const answeredLast = ( state = 1, action) => {
  return state;
}

const game = combineReducers({
  scores,
  answeredLast,
})

export default game;
