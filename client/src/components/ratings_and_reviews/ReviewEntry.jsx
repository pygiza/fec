import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { format, parseISO } from 'date-fns';
import { voteHelpful, reportReview } from './serverFuncs.js';
import Helpful from './reviewEntryComps/Helpful.jsx';
import Report from './reviewEntryComps/Report.jsx';
import ReviewResponse from './reviewEntryComps/ReviewResponse.jsx';
import StarAvg from './reviewEntryComps/StarAvg.jsx';
import ReviewBody from './reviewEntryComps/ReviewBody.jsx';
import ReviewImages from './reviewEntryComps/ReviewImages.jsx';

function ReviewEntry({ review, getCurrentReviews }) {
  const [votedHelpful, setVotedHelpful] = useState(false);
  const [reported, setReported] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [seeMore, setSeeMore] = useState(false);

  function clickHelpful() {
    voteHelpful(review.review_id)
      .then(() => {
        setVotedHelpful(true);
      })
      .catch((err) => {
        console.log('error voting helpful from client', err);
      });
  }

  function clickReport() {
    reportReview(review.review_id)
      .then(() => {
        setReported(true);
      })
      .catch((err) => {
        console.log('error reporting from client', err);
      });
  }

  function clickSeeMore() {
    setSeeMore(!seeMore);
  }

  return (
    <ReviewEntryContainer>
      <hr />
      <StarAvg rating={review.rating} />
      <span style={{ float: 'right' }}>
        {review.reviewer_name}
        ,
        {format(parseISO(review.date), 'MMMM do, yyyy')}
      </span>
      <h3>{review.summary}</h3>
      <ReviewBody reviewBody={review.body} clickSeeMore={clickSeeMore} seeMore={seeMore}/>
      {review.recommend ? <p> <i className="fa-solid fa-check"/> I recommend this product </p> : <p> </p>}
      <ReviewImages images={review.photos}/>
      {review.response ? <ReviewResponse response={review.response} /> : <p> </p>}
      <span>
        <Helpful votedHelpful={votedHelpful} clickHelpful={clickHelpful} helpfulness={review.helpfulness} />
        <span> | </span>
        <Report reported={reported} clickReport={clickReport} />
      </span>
      <hr />
    </ReviewEntryContainer>
  );
}

ReviewEntry.propTypes = {
  review: PropTypes.object.isRequired,
};

const ReviewEntryContainer = styled.div`
  background-color: #F8F9F9;
`;

export default ReviewEntry;
