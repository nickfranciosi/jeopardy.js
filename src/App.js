import React, { Component } from 'react';
import { BrowserRouter as Router, Match, Miss, Link } from 'react-router';
import PlayerSetup from './PlayerSetup';
import NoMatch from './NoMatch';
import GameBoard from './GameBoard';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h2>Jeopardy</h2>
          <Link to="/options">Options</Link>


          <Match exactly pattern="/" component={PlayerSetup} />
          <Match pattern="/gameboard" component={GameBoard} />
          <Miss component={NoMatch} />
        </div>
      </Router>
    );
  }
}



export default App;
