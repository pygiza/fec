import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ReviewList from './ReviewList.jsx';
import ReviewBreakdown from './ReviewBreakdown.jsx';

const OverallReviews = styled.div`
  display: flex;
`;

function RatingsReviews({ productId }) {
  return (
    <div>
      <p>RATINGS & REVIEWS</p>
      <OverallReviews id="reviews">
        <ReviewBreakdown productId={productId} />
        <ReviewList productId={productId} />
      </OverallReviews>
    </div>


  );
}

RatingsReviews.propTypes = {
  productId: PropTypes.number.isRequired,
}

export default RatingsReviews;
