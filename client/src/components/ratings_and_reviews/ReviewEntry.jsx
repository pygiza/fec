import React from "react";

function ReviewEntry({ review }) {
  return (
    <>
      <hr />
      {/* Star Rating */}
      <span>
        {review.reviewer_name}, {review.date}
      </span>
      <h3>{review.summary}</h3>
      <p>{review.body}</p>
      {review.recommend ? <p> I recommend this product </p> : <p> </p>}
      {review.response ? <p>{review.response}</p> : <p> </p>}
      <hr />
    </>
  );
}

export default ReviewEntry;

// Example data
// {
//   "review_id": 5,
//   "rating": 3,
//   "summary": "I'm enjoying wearing these shades",
//   "recommend": false,
//   "response": null,
//   "body": "Comfortable and practical.",
//   "date": "2019-04-14T00:00:00.000Z",
//   "reviewer_name": "shortandsweeet",
//   "helpfulness": 5,
//   "photos": [{
//       "id": 1,
//       "url": "urlplaceholder/review_5_photo_number_1.jpg"
//     },
//     {
//       "id": 2,
//       "url": "urlplaceholder/review_5_photo_number_2.jpg"
//     },
//     // ...
//   ]
// }
