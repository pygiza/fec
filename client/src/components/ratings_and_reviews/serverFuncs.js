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

const voteHelpful = (reviewId) => (
  axios.put(`/reviews/${reviewId}/helpful`)
);

const reportReview = (reviewId) => (
  axios.put(`/reviews/${reviewId}/report`)
);

module.exports = {
  getReviewsBy2,
  voteHelpful,
  reportReview,
};
