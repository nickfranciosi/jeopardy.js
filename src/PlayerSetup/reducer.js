import { C } from './actions';

const players = (state = [], action) => {
  switch(action.type){
    case C.ADD_PLAYER:
      return [...state, action.payload];
    case C.REMOVE_PLAYER:
      return state.filter(player => player.id !== action.id)
    default:
      return state;
  }
}

export default players;
