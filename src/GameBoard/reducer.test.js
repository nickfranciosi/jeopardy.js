import { C } from './actions';
import reducer from './reducer';

const mockInitialState = {
  scores: [
    {
      id: 1,
      value:20,
    },
    {
      id: 3,
      value:30,
    },
  ],
  answeredLast: 1,
};

describe('gameboard reducer', () => {
  it('should update a initialize the scores when the game starts', () => {
    const players = [{id: 1, name: "KrazyEyes"}, {id:78, name: "Jerry"}];
    const recievedAction = {
      type: C.INIT_GAME,
      payload: players
    }

    expect(reducer({}, recievedAction)).toEqual( {
      scores: [
        {
          id: 1,
          value:0,
        },
        {
          id: 78,
          value: 0,
        },
      ],
      answeredLast: 1,
    })
  })

  it('should update a players score with a positive number', () => {
    const recievedAction = {
      type: C.UPDATE_SCORE,
      payload: {
        id: 1,
        value: 10
      }
    }

    expect(reducer(mockInitialState, recievedAction)).toEqual( {
      scores: [
        {
          id: 1,
          value:30,
        },
        {
          id: 3,
          value:30,
        },
      ],
      answeredLast: 1,
    })
  })

  it('should update a players score with a negative number', () => {
    const recievedAction = {
      type: C.UPDATE_SCORE,
      payload: {
        id: 1,
        value: -10
      }
    }

    expect(reducer(mockInitialState, recievedAction)).toEqual( {
      scores: [
        {
          id: 1,
          value:10,
        },
        {
          id: 3,
          value:30,
        },
      ],
      answeredLast: 1,
    })
  })
})
