import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function AddMoreReviews({ moreReviews, revsLeft }) {
  return (
    <span>
      {revsLeft ? <StyledAddReviewsButton onClick={moreReviews} >More Reviews</StyledAddReviewsButton> : ''}
    </span>
  );
}

AddMoreReviews.propTypes = {
  moreReviews: PropTypes.func.isRequired,
  revsLeft: PropTypes.bool.isRequired,
}

const StyledAddReviewsButton = styled.button`
  padding: 1%;
  background-color: white;
  border: 2px black solid;
  font-weight: bold;
  &:hover {
    cursor: pointer;
    background-color: #FFE69A;
  }
`;

export default AddMoreReviews;