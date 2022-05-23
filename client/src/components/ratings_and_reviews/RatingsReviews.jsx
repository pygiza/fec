import React from 'react';
import styled from 'styled-components';
import ReviewList from './ReviewList.jsx';
import ReviewBreakdown from './ReviewBreakdown.jsx';

const OverallReviews = styled.div`
  display: flex;
`;

function RatingsReviews() {
  return (
    <div>
      <p>RATINGS & REVIEWS</p>
      <OverallReviews>
        <ReviewBreakdown productId="37311" />
        <ReviewList productId="37311" />
      </OverallReviews>
    </div>


  );
}

export default RatingsReviews;
