import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ReviewEntry from './ReviewEntry.jsx';
import AddMoreReviews from './reviewListComps/AddMoreReviews.jsx';
import WriteReviewButton from './reviewListComps/WriteReviewButton.jsx';

function ReviewList({ productId, reviews, metaData, page, revsLeft, getReviews, moreReviews, filterStars }) {
  const [displayWrite, setDisplayWrite] = useState(false);

  function toggleWriteReview() {
    setDisplayWrite(!displayWrite);
  }

  return (
    <ReviewListContainer>
      {reviews.map((review) => (
        <ReviewEntry key={review.review_id} review={review} />
      ))}
      <ReviewButtons>
        <AddMoreReviews moreReviews={moreReviews} revsLeft={revsLeft} />
        <WriteReviewButton metaData={metaData} toggleWriteReview={toggleWriteReview} displayWrite={displayWrite}/>
      </ReviewButtons>

    </ReviewListContainer>
  );
}

ReviewList.propTypes = {
  productId: PropTypes.number.isRequired,
  reviews: PropTypes.array.isRequired,
  metaData: PropTypes.object.isRequired,
  page: PropTypes.number,
  revsLeft: PropTypes.bool,
  getReviews: PropTypes.func.isRequired,
  moreReviews: PropTypes.func.isRequired,
};

const ReviewListContainer = styled.div`
  margin: 2%;
  height: 100vh;
  overflow-y: auto;
`;

const ReviewButtons = styled.div`
`;

export default ReviewList;
