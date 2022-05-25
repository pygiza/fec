import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ReviewBreakdownContainer = styled.div`
  width: 34%;
  margin: 2%;
  border: solid black 1px;
`;

function ReviewBreakdown({productId}) {
  return (
    <ReviewBreakdownContainer>
      This is the ReviewBreakdown
    </ReviewBreakdownContainer>
  );
}

ReviewBreakdown.propTypes = {
  productId: PropTypes.string.isRequired,
};

export default ReviewBreakdown;
