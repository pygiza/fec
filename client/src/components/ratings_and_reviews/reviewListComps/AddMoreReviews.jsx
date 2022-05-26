import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function AddMoreReviews({ moreReviews, revsLeft }) {
  return (
    <span>
      {revsLeft ? <button onClick={moreReviews} >More Reviews</button> : ''}
    </span>
  );
}

AddMoreReviews.propTypes = {
  moreReviews: PropTypes.func.isRequired,
  revsLeft: PropTypes.bool.isRequired,
}

export default AddMoreReviews;