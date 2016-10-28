import {
  C,
  updateScore,
  initializeGame
} from './actions';

describe('gameboard actions', () => {
  it('should create an action to initialize the game', () => {
    const players = [{id: 1, name: "Joe"}, {id:2, name: "Karl"}];
    const expectedAction = {
      type: C.INIT_GAME,
      payload: players,
    }
    expect(initializeGame(players)).toEqual(expectedAction)
  })

  it('should create an action to update a players score', () => {
    const id = 123;
    const value = 300;
    const expectedAction = {
      type: C.UPDATE_SCORE,
      payload: {id, value}
    }
    expect(updateScore(id, value)).toEqual(expectedAction)
  })
})
