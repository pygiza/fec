import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { getReviewsBy2, getReviewAmount } from './serverFuncs.js';
import ReviewEntry from './ReviewEntry.jsx';

function ReviewList({ productId }) {
  const [reviews, setReviews] = useState([]);
  const [page, setPage] = useState(1);
  const [revsLeft, setRevsLeft] = useState(0);

  function getReviews() {
    return getReviewsBy2(productId, page)
      .then((res) => {
        setReviews([...res.data.results]);
      })
      .catch((err) => {
        console.log('could not fetch reviews from client', err);
      });
  }


  function moreReviews() {
    return getReviewsBy2(productId, page + 1)
      .then((res) => {
        setReviews([...reviews, ...res.data.results]);
      })
      .then(() => {
        setPage(page + 1);
      })
      .catch((err) => {
        console.log('error fetching more reviews', err);
      });
  }

  function reviewLength() {
    return getReviewAmount(productId)
      .then((len) => {
        setRevsLeft(len - reviews.length)
      });
  }

  useEffect(() => {
    getReviews()
      .then(() => {
        reviewLength();
      });
  }, [productId]);

  return (
    <ReviewListContainer>
      {reviews.map((review) => (
        <ReviewEntry key={review.review_id} review={review} />
      ))}
      <button type="button" onClick={moreReviews}>More Reviews</button>
    </ReviewListContainer>
  );
}

ReviewList.propTypes = {
  productId: PropTypes.number.isRequired,
};

const ReviewListContainer = styled.div`
  width: 66%;
  margin: 2%;
  height: 100vw;
  overflow-y: auto;
`;

export default ReviewList;
