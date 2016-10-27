import React, { PropTypes } from 'react';
import Radium from 'radium';
import styles from './styles';

const PlayerStatus = ({name, score, answeredLast}) => {
  return (
    <div style={[
          styles.base,
          answeredLast && styles.answeredLast,
        ]}>
      <h2>{score}</h2>
      <h4>{name}</h4>
    </div>
  );
}

PlayerStatus.propTypes = {
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};

export default Radium(PlayerStatus);
