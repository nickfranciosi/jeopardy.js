import React, { Component } from 'react';
import { connect } from 'react-redux';
import { playerStatusSelector } from './selectors';
import PlayerList from './components/PlayerList';
import Question from './components/Question';

class GameBoard extends Component{
  render(){
    const {players} = this.props;
    return (
      <div>
        This is the gameboard
        <PlayerList players={players} />
        <Question />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  players: playerStatusSelector(state),
});

export default connect(mapStateToProps)(GameBoard);
