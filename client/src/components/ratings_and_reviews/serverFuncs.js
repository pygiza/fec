const axios = require('axios');

const getReviewsBy2 = (productId, page, sort) => (
  axios.get('/reviews', {
    params: {
      product_id: productId,
      page: 1,
      count: 1000,
      sort,
      widget: 'reviews'
    },
  })
    .then((res) => {
      let start = (page * 2) - 2;
      let end = (page * 2);
      return res.data.results.slice(start, end);
    })
    .catch((err) => {
      console.log('could not fetch reviews from client', err);
    })
);

const checkMoreRevs = (productId, page, sort) => (
  axios.get('/reviews', {
    params: {
      product_id: productId,
      page,
      count: 2,
      sort,
      widget: 'reviews'
    },
  })
    .then((res) => {
      if (res.data.results.length) {
        return true;
      }
      return false;
    })
    .catch((err) => {
      console.log('error checking more revs', err);
    })
);

const getCurrentAmtReviews = (productId, page, sort) => {
  const currentAmt = page * 2;
  return axios.get('/reviews', {
    params: {
      product_id: productId,
      page: 1,
      count: 1000,
      sort,
      widget: 'reviews'
    },
  })
    .then(res => (res.data.results.slice(0, currentAmt)))
};

const getMetaData = (productId) => (
  axios.get('/reviews/meta', {
    params: {
      product_id: productId,
      widget: 'reviews'
    },
  })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log('error fetching meta data', err);
    })
);

const getStarReviews = (starFilters, productId, sort = 'relevant') => (
  axios.get('/reviews', {
    params: {
      product_id: productId,
      count: 10000,
      sort,
      widget: 'reviews'
    },
  })
    .then((res) => {
      const starReviews = [];
      res.data.results.forEach((review) => {
        starFilters.forEach((star) => {
          if (review.rating === parseInt(star)) {
            starReviews.push(review);
          }
        });
      });
      return starReviews;
    })
    .catch((err) => {
      console.log(`error fetching ${star} star reviews from api`, err);
    })
);


const voteHelpful = (reviewId) => (
  axios.put(`/reviews/${reviewId}/helpful`)
);

const reportReview = (reviewId) => (
  axios.put(`/reviews/${reviewId}/report`)
);

module.exports = {
  getReviewsBy2,
  checkMoreRevs,
  getCurrentAmtReviews,
  getMetaData,
  getStarReviews,
  voteHelpful,
  reportReview,
};
