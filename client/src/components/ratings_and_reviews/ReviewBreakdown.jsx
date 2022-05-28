import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { getMetaData } from './serverFuncs.js';

function ReviewBreakdown({productId}) {
  const [ratings, setRatings] = useState({});

  function getRatings() {
    getMetaData(productId)
      .then((data) => {
        setRatings(data);
      });
  }

  useEffect(() => {
    setRatings({});
    getRatings();
  }, [productId]);

  return (
    <ReviewBreakdownContainer>
      This is the ReviewBreakdown
    </ReviewBreakdownContainer>
  );
}

ReviewBreakdown.propTypes = {
  productId: PropTypes.number.isRequired,
};

const ReviewBreakdownContainer = styled.div`
  width: 34%;
  margin: 2%;
  border: solid black 1px;
`;

export default ReviewBreakdown;
