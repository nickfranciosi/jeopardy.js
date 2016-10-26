import React, { PropTypes } from 'react';

const PlayerStatus = ({name, score}) => {
  return (
    <div>
      <h2>{score}</h2>
      <h4>{name}</h4>
    </div>
  );
}

PlayerStatus.propTypes = {
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};

export default PlayerStatus;
