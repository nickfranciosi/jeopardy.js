import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import PlayerForm from './components/PlayerForm';
import { addPlayer, removePlayer } from './actions';
import { initializeGame } from '../GameBoard/actions';
import { connect } from 'react-redux';

class PlayerSetup extends React.Component {
  checkIfPlayerExists(id) {
    return this.props.players.filter(player => player.id === id).length > 0;
  }

  renderForm(id) {
    return (
      <PlayerForm
        key={id}
        playerId={id}
        playerExists={this.checkIfPlayerExists(id)}
        save={this.props.addPlayer}
        remove={this.props.removePlayer}
      />
    )
  }

  renderPlayerForms(id) {
    let playerForms = []
    for(let i = 0; i < this.props.minPlayers; i++) {
      playerForms.push(this.renderForm(i + 1));
    }
    return playerForms;
  }

  hasEnoughPlayers() {
    return this.props.players.length <= this.props.maxPlayers;
  }

  doesNotHaveTooManyPlayers() {
    return this.props.players.length >= this.props.minPlayers
  }

  ableToStartGame(){
    if (this.hasEnoughPlayers() && this.doesNotHaveTooManyPlayers()) {
      this.props.initializeGame(this.props.players);
      return true;
    }
      return false;
  }

  render() {
    return (
      <div>
        <div>
          {this.renderPlayerForms()}
        </div>
        {this.ableToStartGame() && <Link to="/gameboard">Start Game</Link>}
      </div>
    );
  }
}

PlayerSetup.propTypes = {
  minPlayers: PropTypes.number.isRequired,
  maxPlayers: PropTypes.number.isRequired,
  players: PropTypes.array.isRequired,
  addPlayer: PropTypes.func.isRequired,
  removePlayer: PropTypes.func.isRequired,
  initializeGame: PropTypes.func.isRequired,
};

PlayerSetup.defaultProps = {
  minPlayers: 3,
  maxPlayers: 3,
}

export default connect(({players})=>({players}), { addPlayer, removePlayer, initializeGame})(PlayerSetup);
