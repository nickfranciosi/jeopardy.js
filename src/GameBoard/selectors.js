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
    const score = getPlayerScore(player.id, scores);
    return Object.assign({}, player, {score});
  })
)

export const playerStatusSelector = createSelector(
  playersWithScoreSelector,
  answeredLastSelector,
  (players, answerer) => players.map(player => {
    const answeredLast = player.id === answerer;
    return Object.assign({}, player, {answeredLast});
  })
)
