import React, { Component } from 'react';
import { BrowserRouter as Router, Match, Miss, Link } from 'react-router';
import StartScreen from './StartScreen';
import NoMatch from './NoMatch';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h2>Jeopardy</h2>
          <Link to="/settings">Settings</Link>
          <Link to="/start">Start Game</Link>

          <Match pattern="/start" exactly component={StartScreen}/>
          <Miss component={NoMatch} />
        </div>
      </Router>
    );
  }
}



export default App;
