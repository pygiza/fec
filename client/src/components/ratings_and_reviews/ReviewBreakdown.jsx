import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { getMetaData } from './serverFuncs.js';
import StarAvg from './reviewEntryComps/StarAvg.jsx';
import BarGraphList from './reviewBreakdownComps/BarGraphList.jsx';
import CharList from './reviewBreakdownComps/CharList.jsx';

function ReviewBreakdown({productId}) {
  const [ratings, setRatings] = useState({});
  const [avgRating, setAvgRating] = useState(null);
  const [avgRecommend, setAvgRecommend] = useState(null);
  const [totalRatings, setTotalRatings] = useState(null);

  function getRatings() {
    getMetaData(productId)
      .then((data) => {
        setRatings(data);
        let total = 0;
        let count = 0;
        for (let key in data.ratings) {
          total += (parseInt(data.ratings[key]) * parseInt(key));
          count += parseInt(data.ratings[key]);
        }
        setTotalRatings(count);
        setAvgRating(Math.round(total/count * 10) / 10);

        let avgRec = (parseInt(data.recommended.true) / (parseInt(data.recommended.true) + parseInt(data.recommended.false)) * 100);
        setAvgRecommend(Math.round(avgRec));
      });
  }


  useEffect(() => {
    setRatings({});
    getRatings();
  }, [productId]);

  return (
    <ReviewBreakdownContainer>
      <Heading>
        <AvgRatingText>{avgRating}</AvgRatingText>
        <StarContainer>
          <StarAvg rating={avgRating} />
        </StarContainer>
      </Heading>
      <RecStyle>{avgRecommend}% of reviews recommend this product</RecStyle>
      <BarGraphList ratings={ratings.ratings} count={totalRatings}/>
      <CharList />
    </ReviewBreakdownContainer>
  );
}

ReviewBreakdown.propTypes = {
  productId: PropTypes.number.isRequired,
};

const ReviewBreakdownContainer = styled.div`
  width: 34%;
  margin: 2%;
  border: solid black 3px;
`;

const AvgRatingText = styled.span`
  font-size: 400%;
  text-align: left;
  margin-left: 10%;
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
  text-align: center;
  font-weight: bold;
`;

export default ReviewBreakdown;
