import React from 'react';
import PropTypes from 'prop-types';

function Helpful({ votedHelpful, clickHelpful, helpfulness }) {
  return (
    <span>
      Helpful?
      {votedHelpful ? 'Yes'
        : <a href="#" role="button" onClick={clickHelpful}>Yes</a>}
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
