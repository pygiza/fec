import React from 'react';
import ReviewEntry from './ReviewEntry.jsx';
import reviews from './exampleReviewData.js';

function ReviewList() {
  return (
    <div>
      {reviews.results.map((review) => (
        <ReviewEntry review={review} />
      ))}
    </div>
  );
}

export default ReviewList;
