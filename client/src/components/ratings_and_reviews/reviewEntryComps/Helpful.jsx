import React from 'react';
import PropTypes from 'prop-types';

function Helpful({ votedHelpful, clickHelpful, helpfulness }) {
  return (
    <span>
      Helpful?
      {votedHelpful ? 'Yes'
        : <u  role="button" onClick={clickHelpful}>Yes</u>}
      (
      {votedHelpful ? helpfulness + 1 : helpfulness}
      )
    </span>
  );
}

Helpful.propTypes = {
  votedHelpful: PropTypes.bool.isRequired,
  clickHelpful: PropTypes.func.isRequired,
  helpfulness: PropTypes.number.isRequired,
};

export default Helpful;
