import React, { PropTypes } from 'react';
import { Link, Match } from 'react-router';
import PlayerSetup from '../PlayerSetup';
import GameBoard from '../GameBoard';

class StartScreen extends React.Component {
  render() {
    return (
      <div>
        Start Screen Here we will set up our players
        <PlayerSetup maxPlayers={3} minPlayers={3} />
      </div>

    );
  }
}

export default StartScreen;
