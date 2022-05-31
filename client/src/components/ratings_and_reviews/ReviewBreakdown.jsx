import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { getMetaData } from './serverFuncs.js';
import StarAvg from './reviewEntryComps/StarAvg.jsx';
import BarGraphList from './reviewBreakdownComps/BarGraphList.jsx';
import CharList from './reviewBreakdownComps/CharList.jsx';

function ReviewBreakdown({ productId, metaData, filterStars, getCurrentRevs }) {
  const [avgRating, setAvgRating] = useState(null);
  const [avgRecommend, setAvgRecommend] = useState(null);
  const [totalRatings, setTotalRatings] = useState(null);

  function getRatings() {
    let total = 0;
    let count = 0;
    for (let key in metaData.ratings) {
      total += (parseInt(metaData.ratings[key]) * parseInt(key));
      count += parseInt(metaData.ratings[key]);
    }
    setTotalRatings(count);
    setAvgRating(parseFloat(Math.round(total/count * 10) / 10).toFixed(1));

    let avgRec = (parseInt(metaData.recommended.true) / (parseInt(metaData.recommended.true) + parseInt(metaData.recommended.false)) * 100);
    setAvgRecommend(Math.round(avgRec));
  }


  useEffect(() => {
    getRatings();
  }, [metaData]);

  return (
    <ReviewBreakdownContainer>
      <Heading>
        <AvgRatingText onClick={getCurrentRevs}>{avgRating || ""}</AvgRatingText>
        <StarContainer>
          <StarAvg rating={avgRating} />
        </StarContainer>
      </Heading>
      <RecStyle>{avgRecommend}% of reviews recommend this product</RecStyle>
      <BarGraphList ratings={metaData.ratings} count={totalRatings} filterStars={filterStars}/>
      <CharList chars={metaData.characteristics}/>
    </ReviewBreakdownContainer>
  );
}

ReviewBreakdown.propTypes = {
  productId: PropTypes.number.isRequired,
  metaData: PropTypes.object.isRequired,
  filterStars: PropTypes.func.isRequired,
  getCurrentRevs: PropTypes.func.isRequired,
};

const ReviewBreakdownContainer = styled.div`
  margin: 2%;
  border: solid black 3px;
  height: max-content;
`;

const AvgRatingText = styled.span`
  font-size: 4em;
  text-align: left;
  margin-left: 10%;
  &:hover {
    cursor: pointer;
    color: red;
  }
`;

const Heading = styled.div`
  display: flex;
  padding-top: 5%;
`;

const StarContainer = styled.span`
  margin: 5%;
`;

const RecStyle = styled.p`
  font-size: 1em;
  margin: 1% 8%;
  text-align: center;
  font-weight: bold;
`;

export default ReviewBreakdown;
