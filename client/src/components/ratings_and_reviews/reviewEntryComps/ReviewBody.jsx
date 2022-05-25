import React from 'react';
import PropTypes from 'prop-types';

function ReviewBody() {
  return (
    <div>
      This is the review body
    </div>
  );
}

ReviewBody.propTypes = {
  body: PropTypes.string,
};

export default ReviewBody;
