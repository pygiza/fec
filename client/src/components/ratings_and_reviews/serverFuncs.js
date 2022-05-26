const axios = require('axios');

const getReviewsBy2 = (productId, page) => (
  axios.get('/reviews', {
    params: {
      product_id: productId,
      page,
      count: 2,
    },
  })
);

const checkMoreRevs = (productId, page) => (
  axios.get('/reviews', {
    params: {
      product_id: productId,
      page,
      count: 2,
    },
  })
    .then((res) => {
      console.log('checking reviews for page' + page);
      if (res.data.results.length) {
        return true;
      }
      return false;
    })
    .catch((err) => {
      console.log('error checking more revs', err);
    })
);

const getCurrentAmtReviews = (productId, page) => {
  const currentAmt = page * 2;
  return axios.get('/reviews', {
    params: {
      product_id: productId,
      page: 1,
      count: currentAmt,
    },
  })
};

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
  voteHelpful,
  reportReview,
};
