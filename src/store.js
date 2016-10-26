import { createStore, combineReducers } from 'redux';
import players from './PlayerSetup/reducer';
import game from './GameBoard/reducer';

const rootReducer = combineReducers({
  players,
  game,
});

let store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
