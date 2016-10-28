import { C } from './actions';
import reducer from './reducer';

const initialState = {
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
  it('should update a players score with a positive number', () => {
    const recievedAction = {
      type: C.UPDATE_SCORE,
      payload: {
        id: 1,
        value: 10
      }
    }

    expect(reducer(initialState, recievedAction)).toEqual( {
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

    expect(reducer(initialState, recievedAction)).toEqual( {
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
