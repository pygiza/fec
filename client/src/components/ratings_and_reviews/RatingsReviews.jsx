import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ReviewList from './ReviewList.jsx';
import ReviewBreakdown from './ReviewBreakdown.jsx';


function RatingsReviews({ productId }) {

  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  )

  useEffect(() => {
    window
    .matchMedia("(min-width: 768px)")
    .addEventListener('change', e => setMatches( e.matches ));
  }, []);

  return (
    <div>
      <p>RATINGS & REVIEWS</p>
      { matches &&
      (<OverallReviews>
        <ReviewBreakdown productId={productId} />
        <ReviewList productId={productId} />
      </OverallReviews>)}
      { !matches &&
      (<SmallScreen>
        <ReviewBreakdown productId={productId} />
        <ReviewList productId={productId} />
      </SmallScreen>)}
    </div>


  );
}

const OverallReviews = styled.div`
  display: grid;
  grid-template-columns: 34% 66%;
`;

const SmallScreen = styled.div`
  display: flex;
  flex-direction: column;
`;

RatingsReviews.propTypes = {
  productId: PropTypes.number.isRequired,
}

export default RatingsReviews;
