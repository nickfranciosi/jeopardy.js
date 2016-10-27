import { createSelector } from 'reselect';

const playersSelector = state => state.players;
const scoresSelector = state => state.game.scores;
const answeredLastSelector = state => state.game.answeredLast;

const getPlayerScore = (id, scores) => {
  return scores.find(score => score.id === id).value;
};

export const playersWithScoreSelector = createSelector(
  playersSelector,
  scoresSelector,
  (players, scores) => players.map(player => {
    player.score = getPlayerScore(player.id, scores);
    return player;
  })
)

export const playerStatusSelector = createSelector(
  playersWithScoreSelector,
  answeredLastSelector,
  (players, answeredLast) => players.map(player => {
    player.answeredLast = player.id === answeredLast;
    return player;
  })
)
