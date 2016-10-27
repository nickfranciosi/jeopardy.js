import React from 'react';
import PlayerStatus from '../PlayerStatus';

const PlayerList = ({players, answeredLast}) => {
  return (
    <div>
      {players.map((player) => <PlayerStatus key={player.id} {...player} />)}
    </div>
  )
}

export default PlayerList;
