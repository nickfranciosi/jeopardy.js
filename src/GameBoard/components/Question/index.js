import React, {PropTypes} from 'react';
import Timer from '../Timer';

const Question = (props) => {
  return (
    <Timer>
      {(time) => (
        <div>
          This primitive holds several items.
          <p>{time}</p>
        </div>
      )}
    </Timer>
  );
}

Question.propTypes = {
};

export default Question;
