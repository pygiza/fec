import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { getReviewsBy2, checkMoreRevs, getMetaData, getStarReviews, getCurrentAmtReviews } from './serverFuncs.js';
import ReviewList from './ReviewList.jsx';
import ReviewBreakdown from './ReviewBreakdown.jsx';
import ReviewFilter from './reviewListComps/ReviewFilter.jsx';


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

  const initialMetaData = {
    "product_id": "",
    "ratings": {
        "1": "",
        "2": "",
        "3": "",
        "4": "",
        "5": ""
    },
    "recommended": {
        "false": "",
        "true": ""
    },
    "characteristics": {
    }
  };

  const [reviews, setReviews] = useState([]);
  const [metaData, setMetaData] = useState(initialMetaData);
  const [page, setPage] = useState(1);
  const [revsLeft, setRevsLeft] = useState(false);
  const [currentFilters, setCurrentFilters] = useState([]);
  const [sort, setSort] = useState('relevant');

  function getReviews() {
    return getReviewsBy2(productId, 1, sort)
      .then((revs) => {
        setReviews([...revs]);
      })
      .then(() => {
        setPage(1);
      })
      .then(() => {
        checkMoreRevs(productId, 2, sort)
          .then((revsLeft) => {
            setRevsLeft(revsLeft);
          });
      })
  }

  useEffect(() => {
    getReviews();
  }, [productId, sort]);

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
    return getReviewsBy2(productId, page + 1, sort)
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
        checkMoreRevs(productId, page + 2, sort)
          .then((revsLeft) => {
            setRevsLeft(revsLeft);
          });
      });
  }

  function filterStars(star) {
    let newFilters = [...currentFilters];
    if (currentFilters.indexOf(star) !== -1) {
      let index = currentFilters.indexOf(star);
      console.log('index of star', index)
      if (index === 0) {
        newFilters.shift();
      } else {
        console.log(newFilters.slice(0, index));
        newFilters = newFilters.slice(0, index).concat(newFilters.slice(index + 1));
      }
      console.log('new filters', newFilters);
    } else {
      newFilters.push(star);
    }
    setCurrentFilters([...newFilters]);
    if (newFilters.length === 0) {
      getReviews();
      return;
    }
    getStarReviews(newFilters, productId, sort)
      .then((data) => {
        setRevsLeft(false);
        setReviews([...data]);
      });
  }

  function getCurrentRevs() {
    getCurrentAmtReviews(productId, page, sort)
      .then((currentRevs) => {
        setReviews([...currentRevs]);
        setCurrentFilters([]);
      })
      .then(() => {
        checkMoreRevs(productId, page + 1, sort)
          .then((revsLeft) => {
            setRevsLeft(revsLeft);
          });
      });
  }

  useEffect(() => {
    setCurrentFilters([]);
  }, [productId]);

  function onSortChange(e) {
    setSort(e.target.value);
  }

  useEffect(() => {
    setSort('relevant');
  }, [productId]);

  return (
    <div>
      <SectionTitle>RATINGS & REVIEWS</SectionTitle>
      { matches &&
      (<OverallReviews>
        <ReviewBreakdown
          productId={productId}
          metaData={metaData}
          filterStars={filterStars}
          getCurrentRevs={getCurrentRevs}
        />
        {/* <ReviewFilter style={{ gridColumnStart: 2, }}/> */}
        <ReviewList
          productId={productId}
          reviews={reviews}
          metaData={metaData}
          page={page}
          revsLeft={revsLeft}
          getReviews={getReviews}
          moreReviews={moreReviews}
          onSortChange={onSortChange}
          currentFilters={currentFilters}
          filterStars={filterStars}
        />
      </OverallReviews>)}
      { !matches &&
      (<SmallScreen>
          <ReviewBreakdown
            productId={productId}
            metaData={metaData}
            filterStars={filterStars}
            getCurrentRevs={getCurrentRevs}
          />
        {/* <ReviewFilter /> */}
        <ReviewList
          productId={productId}
          reviews={reviews}
          metaData={metaData}
          page={page}
          revsLeft={revsLeft}
          getReviews={getReviews}
          moreReviews={moreReviews}
          onSortChange={onSortChange}
          currentFilters={currentFilters}
          filterStars={filterStars}
        />
      </SmallScreen>)}
    </div>


  );
}

const OverallReviews = styled.div`
  display: grid;
  grid-template-columns: 34% 66%;
`;

const SectionTitle = styled.p`
  font-size: 1.3em;
  margin-left: 1%;
  margin-top: 2%;
  font-weight: bold;
`;

const SmallScreen = styled.div`
  display: flex;
  flex-direction: column;
`;

RatingsReviews.propTypes = {
  productId: PropTypes.number.isRequired,
}

export default RatingsReviews;
