import { createStore, combineReducers } from 'redux';
import players from './PlayerSetup/reducer';
import game from './GameBoard/reducer';

import initialState from './fakeData';

const rootReducer = combineReducers({
  players,
  game,
});

let store = createStore(rootReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
