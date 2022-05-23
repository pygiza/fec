import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { format, parseISO } from 'date-fns';
import axios from 'axios';

function ReviewEntry({ review, getReviews }) {
  const [votedHelpful, setVotedHelpful] = useState(false);
  const [reported, setReported] = useState(false);

  function clickVote(e) {
    let voteUrl = '';
    let voteStateFunc;
    if (e.target.innerHTML === 'Yes') {
      voteUrl = `/reviews/${review.review_id}/helpful`;
      voteStateFunc = setVotedHelpful;
    }
    if (e.target.innerHTML === 'Report') {
      voteUrl = `/reviews/${review.review_id}/report`;
      voteStateFunc = setReported;
    }

    axios.put(voteUrl)
      .then(() => {
        getReviews()
          .then(() => {
            voteStateFunc(true);
          });
      })
      .catch((err) => {
        console.log(`error putting ${e.target.innerHTML} from client`, err);
      });
  }

  return (
    <>
      <hr />
      {/* Star Rating */}
      <span>
        {review.reviewer_name}, {format(parseISO(review.date), 'MMMM do, yyyy')}
      </span>
      <h3>{review.summary}</h3>
      <p>{review.body}</p>
      {review.recommend ? <p> I recommend this product </p> : <p> </p>}
      {review.response ? <p>{review.response}</p> : <p> </p>}
      <span>
        Helpful?
        {votedHelpful ? 'Yes ' : <a href="#" role="button" onClick={clickVote}>Yes</a>}
        ({review.helpfulness})
         |
        {reported ? ' Report' : <a href="#" role="button" onClick={clickVote}>Report</a>}
      </span>
      <hr />
    </>
  );
}

ReviewEntry.propTypes = {
  review: PropTypes.object.isRequired,
  getReviews: PropTypes.func.isRequired,
};

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
