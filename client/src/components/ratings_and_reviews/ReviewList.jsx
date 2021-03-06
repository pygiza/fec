import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ReviewEntry from './ReviewEntry.jsx';
import AddMoreReviews from './reviewListComps/AddMoreReviews.jsx';
import WriteReviewButton from './reviewListComps/WriteReviewButton.jsx';
import ReviewFilter from './reviewListComps/ReviewFilter.jsx';

function ReviewList({ productId, reviews, metaData, page, revsLeft, getReviews, moreReviews, onSortChange, currentFilters, filterStars, removeFilters, productInfo }) {
  const [displayWrite, setDisplayWrite] = useState(false);

  function toggleWriteReview() {
    setDisplayWrite(!displayWrite);
  }

  return (
    <RightSide>
      <ReviewFilter metaData={metaData} onSortChange={onSortChange} currentFilters={currentFilters} filterStars={filterStars} removeFilters={removeFilters}/>
      <ReviewListContainer>
        {reviews.map((review) => (
          <ReviewEntry key={review.review_id} review={review} />
        ))}
        <ReviewButtons>
          <AddMoreReviews moreReviews={moreReviews} revsLeft={revsLeft} />
          <WriteReviewButton metaData={metaData} toggleWriteReview={toggleWriteReview} displayWrite={displayWrite} productInfo={productInfo}/>
        </ReviewButtons>
      </ReviewListContainer>
    </RightSide>

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
  onSortChange: PropTypes.func.isRequired,
  currentFilters: PropTypes.array.isRequired,
  filterStars: PropTypes.func.isRequired,
  removeFilters: PropTypes.func.isRequired,
  productInfo: PropTypes.object.isRequired,
};

const RightSide = styled.div`
  margin: 2%;
`;

const ReviewListContainer = styled.div`
  height: 88vh;
  overflow-y: auto;
`;

const ReviewButtons = styled.div`
`;

export default ReviewList;
