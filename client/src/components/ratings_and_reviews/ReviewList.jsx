import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { getReviewsBy2, checkMoreRevs, getMetaData, getStarReviews } from './serverFuncs.js';
import ReviewEntry from './ReviewEntry.jsx';
import AddMoreReviews from './reviewListComps/AddMoreReviews.jsx';
import WriteReviewButton from './reviewListComps/WriteReviewButton.jsx';

function ReviewList({ productId }) {
  const [reviews, setReviews] = useState([]);
  const [page, setPage] = useState(1);
  const [revsLeft, setRevsLeft] = useState(false);
  const [displayWrite, setDisplayWrite] = useState(false);
  const [metaData, setMetaData] = useState({});

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

  function toggleWriteReview() {
    setDisplayWrite(!displayWrite);
  }

  function getMeta() {
    getMetaData(productId)
      .then((data) => {
        setMetaData(data);
      });
  }

  useEffect(() => {
    getReviews();
  }, [productId]);

  useEffect(() => {
    getMeta();
  }, [productId]);


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
};

const ReviewListContainer = styled.div`
  margin: 2%;
  height: 100vw;
  overflow-y: auto;
`;

const ReviewButtons = styled.div`
`;

export default ReviewList;
