import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { getReviewsBy2, checkMoreRevs } from './serverFuncs.js';
import ReviewEntry from './ReviewEntry.jsx';
import AddMoreReviews from './reviewListComps/AddMoreReviews.jsx';

function ReviewList({ productId }) {
  const [reviews, setReviews] = useState([]);
  const [page, setPage] = useState(1);
  const [revsLeft, setRevsLeft] = useState(false);

  function getReviews() {
    return getReviewsBy2(productId, 1)
      .then((res) => {
        setReviews([...res.data.results]);
      })
      .then(() => {
        setPage(1);
      })
      .then(() => {
        checkMoreRevs(productId, 2)
          .then((revsLeft) => {
            setRevsLeft(revsLeft);
          });
      })
      .catch((err) => {
        console.log('could not fetch reviews from client', err);
      });
  }


  function moreReviews() {
    return getReviewsBy2(productId, page + 1)
      .then((res) => {
        setReviews([...reviews, ...res.data.results]);
        return res.data.results;
      })
      .then((res) => {
        if (res.length) {
          setPage(page + 1);
        }
      })
      .then(() => {
        checkMoreRevs(productId, page + 2)
          .then((revsLeft) => {
            setRevsLeft(revsLeft);
          });
      })
      .catch((err) => {
        console.log('error fetching more reviews', err);
      });
  }

  useEffect(() => {
    getReviews();
  }, [productId]);

  return (
    <ReviewListContainer>
      {reviews.map((review) => (
        <ReviewEntry key={review.review_id} review={review} />
      ))}
      <AddMoreReviews moreReviews={moreReviews} revsLeft={revsLeft} />
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
