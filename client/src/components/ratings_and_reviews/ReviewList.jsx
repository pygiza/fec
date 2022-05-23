import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import ReviewEntry from './ReviewEntry.jsx';

function ReviewList({ productId }) {
  const [reviews, setReviews] = useState([]);
  const [page, setPage] = useState(1);

  function getReviews() {
    return axios.get('/reviews', {
      params: {
        product_id: productId,
        page: 1,
        count: 2,
      },
    })
      .then((res) => {
        setReviews([...res.data.results]);
      })
      .catch((err) => {
        console.log('could not fetch reviews from client', err);
      });
  }

  useEffect(() => {
    axios.get('/reviews', {
      params: {
        product_id: productId,
        page: 1,
        count: 2,
      },
    })
      .then((res) => {
        setReviews([...res.data.results]);
      })
      .catch((err) => {
        console.log('could not fetch reviews from client', err);
      });
  }, []);

  return (
    <div>
      {reviews.map((review) => (
        <ReviewEntry getReviews={getReviews} key={review.review_id} review={review} />
      ))}
    </div>
  );
}

ReviewList.propTypes = {
  productId: PropTypes.string.isRequired,
};

export default ReviewList;
