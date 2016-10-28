import { C, updateScore } from './actions';

describe('gameboard actions', () => {
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
