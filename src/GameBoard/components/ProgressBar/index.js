import React, {PropTypes} from 'react';

const ProgressBar = ({start, current}) => {
  const styles = {
    width: `${current/start * 100}%`,
    transition: 'width .3s ease',
    height: 10,
    background: "blue"
  }
  return (<div style={styles}></div>);
}

ProgressBar.propTypes = {
};

export default ProgressBar;
