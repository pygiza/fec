const axios = require('axios');

const getReviewsBy2 = (productId, page, sort = 'relevant') => (
  axios.get('/reviews', {
    params: {
      product_id: productId,
      page,
      count: 2,
      sort,
    },
  })
    .then((res) => (res.data.results))
    .catch((err) => {
      console.log('could not fetch reviews from client', err);
    })
);

const checkMoreRevs = (productId, page, sort = 'relevant') => (
  axios.get('/reviews', {
    params: {
      product_id: productId,
      page,
      count: 2,
      sort,
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

const getCurrentAmtReviews = (productId, page, sort = 'relevant') => {
  const currentAmt = page * 2;
  return axios.get('/reviews', {
    params: {
      product_id: productId,
      page: 1,
      count: currentAmt,
      sort,
    },
  })
    .then(res => (res.data.results))
};

const getMetaData = (productId) => (
  axios.get('/reviews/meta', {
    params: {
      product_id: productId,
    },
  })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log('error fetching meta data', err);
    })
);

const getStarReviews = (star, productId, sort = 'relevant') => (
  axios.get('/reviews', {
    params: {
      product_id: productId,
      count: 10000,
      sort,
    },
  })
    .then((res) => {
      const starReviews = [];
      res.data.results.forEach((review) => {
        if (review.rating === parseInt(star)) {
          starReviews.push(review);
        }
      });
      return starReviews;
    })
    .catch((err) => {
      console.log(`error fetching ${star} star reviews from api`, err);
    })
);

const getTotalReviews = (productId) => (
  axios.get('/reviews', {
    params: {
      product_id: productId,
      count: 10000,
    }
  })
    .then((res) => res.data.results.length)
    .catch((err) => {
      console.log('could not fetch review length', err);
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
