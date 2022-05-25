import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function ReviewResponse({ response }) {
  return (
    <ResponseContainer>
      <h4>Response:</h4>
      <p>{response}</p>
    </ResponseContainer>
  );
}

ReviewResponse.propTypes = {
  response: PropTypes.string,
};

const ResponseContainer = styled.div`
  background-color: #D5DBDB;
`;

export default ReviewResponse;
