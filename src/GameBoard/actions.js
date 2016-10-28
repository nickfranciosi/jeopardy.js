export const C = {
  UPDATE_SCORE: 'UPDATE_SCORE',
  INIT_GAME: 'INIT_GAME',
}

export const updateScore = (id, value) => {
  return {
    type: C.UPDATE_SCORE,
    payload: {id, value},
  }
}
