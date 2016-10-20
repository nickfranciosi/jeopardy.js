import React, {PropTypes} from 'react';
import PlayerSetup from '../PlayerSetup';

class StartScreen extends React.Component {
  render() {
    return (
      <div>
        Start Screen Here we will set up our players
        <PlayerSetup maxPlayers={3} minPlayers={1} />
      </div>

    );
  }
}

export default StartScreen;
