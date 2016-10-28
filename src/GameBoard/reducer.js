import { C } from './actions';

const game = (state = {}, action) => {
  switch(action.type){
    case C.UPDATE_SCORE:
      return Object.assign({}, state, { scores: score(state.scores, action)});
    default:
      return state;
  }
  return state;
}

const score =  (state = [], action) => {
  switch(action.type){
    case C.UPDATE_SCORE:
      return [ ...state.filter(score => score.id !== action.payload.id), action.payload]
    default:
      return state;
  }
  return state;
}

export default game;
