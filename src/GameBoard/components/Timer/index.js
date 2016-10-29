import React, { Component, PropTypes} from 'react';

class Timer extends Component {

  state = {
    time: 10000,
  }

  componentDidMount() {
    this.startTimer()
  }

  componentWillUnMount() {
    this.stopTimer();
  }

  startTimer() {
    this.timer = setInterval(this.tick.bind(this), 1000)
  }

  tick() {
    if(this.state.time <= 0){
      this.stopTimer();
    } else {
      this.setState({
        time: this.state.time - 1000,
      })
    }
  }

  stopTimer(){
    clearInterval(this.timer);
  }


  render(){
    return this.props.children(this.state.time);
  }
}

Timer.propTypes = {
  time: PropTypes.number,
};

export default Timer;
