import React, { Component, PropTypes} from 'react';

class Timer extends Component {

  state = {
    start: 20000,
    time: 20000,
    interval: 50
  }

  componentDidMount() {
    this.startTimer()
  }

  componentWillUnMount() {
    this.stopTimer();
  }

  startTimer() {
    this.timer = setInterval(this.tick.bind(this), this.state.interval)
  }

  tick() {
    if(this.state.time <= 0){
      this.stopTimer();
    } else {
      this.setState({
        time: this.state.time - this.state.interval,
      })
    }
  }

  stopTimer(){
    clearInterval(this.timer);
  }


  render(){
    return this.props.children(this.state.start, this.state.time);
  }
}

Timer.propTypes = {
  time: PropTypes.number,
};

export default Timer;
