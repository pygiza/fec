import React from 'react';
import PropTypes from 'prop-types';

function Helpful({ votedHelpful, clickHelpful, helpfulness }) {
  return (
    <span>
      Helpful?
      {votedHelpful ? 'Yes'
        : <u  role="button" onClick={clickHelpful}>Yes</u>}
      (
      {helpfulness}
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
