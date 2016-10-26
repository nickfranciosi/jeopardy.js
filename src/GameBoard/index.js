import React, { Component } from 'react';
import { connect } from 'react-redux';
import PlayerStatus from './components/PlayerStatus';

class GameBoard extends Component{

  render(){
    return (
      <div>
        This is the gameboard
        {this.props.players.map((player) => <PlayerStatus key={player.id} {...player}/>)}
      </div>
    )
  }
}

export default connect(({players}) => ({players}))(GameBoard);
