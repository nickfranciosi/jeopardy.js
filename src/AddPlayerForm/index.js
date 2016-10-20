import React from 'react';

class PlayerSetup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
      playerCount: 0
    }

    this.renderPlayerInputs = this.renderPlayerInputs.bind(this);
    this.addPlayerInput = this.addPlayerInput.bind(this);
  }

  componentWillMount() {
    this.setState({
      playerCount: this.props.minPlayers
    })
  }

  renderInput(index) {
    return (
      <input key={index} type="text"/>
    )
  }

  renderPlayerInputs() {
    let inputs = []
    for(let i = 0; i < this.state.playerCount; i++){
      inputs.push(this.renderInput(i));
    }

    return (
      <div>
        {inputs}
      </div>
    )
  }

  addPlayerInput() {
    if (this.state.playerCount < this.props.maxPlayers) {
        this.setState({
          playerCount: this.state.playerCount + 1
        })
    }
  }

  render() {
    return (
      <div>
        <div>
          {this.renderPlayerInputs()}
        </div>
        <button onClick={this.addPlayerInput}>Add Player</button>
      </div>
    );
  }
}

PlayerSetup.propTypes = {
};

export default PlayerSetup;
