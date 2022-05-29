import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { getReviewsBy2, checkMoreRevs, getMetaData, getStarReviews } from './serverFuncs.js';
import ReviewList from './ReviewList.jsx';
import ReviewBreakdown from './ReviewBreakdown.jsx';


function RatingsReviews({ productId }) {
  // dynamic sizing
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  )

  useEffect(() => {
    window
    .matchMedia("(min-width: 768px)")
    .addEventListener('change', e => setMatches( e.matches ));
  }, []);

  const [reviews, setReviews] = useState([]);
  const [metaData, setMetaData] = useState({});
  const [page, setPage] = useState(1);
  const [revsLeft, setRevsLeft] = useState(false);

  function getReviews() {
    return getReviewsBy2(productId, 1)
      .then((revs) => {
        setReviews([...revs]);
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
  }

  useEffect(() => {
    getReviews();
  }, [productId]);

  function getMeta() {
    getMetaData(productId)
      .then((data) => {
        setMetaData(data);
      });
  }

  useEffect(() => {
    getMeta();
  }, [productId]);

  function moreReviews() {
    return getReviewsBy2(productId, page + 1)
      .then((revs) => {
        setReviews([...reviews, ...revs]);
        return revs;
      })
      .then((revs) => {
        if (revs.length) {
          setPage(page + 1);
        }
      })
      .then(() => {
        checkMoreRevs(productId, page + 2)
          .then((revsLeft) => {
            setRevsLeft(revsLeft);
          });
      });
  }

  function filterStars() {
    getStarReviews(productId)
      .then((data) => setReviews([...data]));
  }


  return (
    <div>
      <p>RATINGS & REVIEWS</p>
      { matches &&
      (<OverallReviews>
        <ReviewBreakdown productId={productId} metaData={metaData}/>
        <ReviewList
          productId={productId}
          reviews={reviews}
          metaData={metaData}
          page={page}
          revsLeft={revsLeft}
          getReviews={getReviews}
          moreReviews={moreReviews}
          filterStars={filterStars}
        />
      </OverallReviews>)}
      { !matches &&
      (<SmallScreen>
        <ReviewBreakdown productId={productId} />
        <ReviewList productId={productId} />
      </SmallScreen>)}
    </div>


  );
}

const OverallReviews = styled.div`
  display: grid;
  grid-template-columns: 34% 66%;
`;

const SmallScreen = styled.div`
  display: flex;
  flex-direction: column;
`;

RatingsReviews.propTypes = {
  productId: PropTypes.number.isRequired,
}

export default RatingsReviews;
