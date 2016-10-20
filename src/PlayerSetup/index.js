import React from 'react';
import PlayerForm from './components/PlayerForm';
import { v4 as randomId } from 'uuid';

class PlayerSetup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
    }

    this.handlePlayerSave = this.handlePlayerSave.bind(this);
    this.handlePlayerRemove = this.handlePlayerRemove.bind(this);
    this.addPlayerInput = this.addPlayerInput.bind(this);
  }

  componentWillMount() {
    this.initPlayers()
  }

  initPlayers() {
    let players = [];
    for(let i = 0; i < this.props.minPlayers; i++){
      players.push(this.setUpEmptyPlayer());
    }

    this.setState({
      players
    })
  }

  setUpEmptyPlayer() {
    return {id: randomId()}
  }

  handlePlayerSave(player) {
    let index = this.state.players.map(x => x.id).indexOf(player.id);
    this.setState({
      players: [
        ...this.state.players.slice(0, index),
        Object.assign({}, player, {saved: true}),
        ...this.state.players.slice(index + 1)
      ]
    });
  }

  handlePlayerRemove(id) {
    if(this.state.players.length > this.props.minPlayers){
      this.setState({
        players: this.state.players.filter(player => player.id !== id)
      });
    }
  }

  renderPlayerForms(id) {
    return (
      <PlayerForm
        key={id}
        playerId={id}
        save={this.handlePlayerSave}
        remove={this.handlePlayerRemove}
      />
    )
  }

  addPlayerInput() {
    if (this.state.players.length < this.props.maxPlayers) {
        this.setState({
          players: [...this.state.players, this.setUpEmptyPlayer()],
        })
    }
  }

  render() {
    return (
      <div>
        {this.state.players.filter(p => p.saved).map((p,i) => <h2 key={i}>{p.name}</h2>)}
        <div>
          {this.state.players.map(p => this.renderPlayerForms(p.id))}
        </div>
        <button onClick={this.addPlayerInput}>Add Player</button>
      </div>
    );
  }
}

PlayerSetup.propTypes = {
};

export default PlayerSetup;
