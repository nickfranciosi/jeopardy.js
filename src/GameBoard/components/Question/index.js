import React, {PropTypes} from 'react';
import Timer from '../Timer';
import ProgressBar from '../ProgressBar';

const Question = (props) => {
  return (
    <Timer>
      {(start, time) => (
        <ProgressBar start={start} current={time} />
      )}
    </Timer>
  );
}

Question.propTypes = {
};

export default Question;
