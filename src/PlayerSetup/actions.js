export const C = {
  ADD_PLAYER: 'ADD_PLAYER',
  REMOVE_PLAYER: 'REMOVE_PLAYER',
}

export const addPlayer = (player) => {
  return {
    type: C.ADD_PLAYER,
    payload: player,
  }
}

export const removePlayer = (id) => {
  return {
    type: C.REMOVE_PLAYER,
    id,
  }
}
