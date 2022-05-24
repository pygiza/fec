import React from 'react';
import PropTypes from 'prop-types';

function Report({ reported, clickReport }) {
  return (
    <span>
      {reported ? 'Reported' : <a href="#" role="button" onClick={clickReport}>Report</a>}
    </span>
  );
}

Report.propTypes = {
  reported: PropTypes.bool.isRequired,
  clickReport: PropTypes.func.isRequired,
};

export default Report;
