import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function ReviewBody({ reviewBody, clickSeeMore, seeMore }) {

  return (
    <div>
      {reviewBody.length > 250 ?
        !seeMore ?
          <div>
            <p>{reviewBody.slice(0, 250)}...</p>
            <SeeMoreLess onClick={clickSeeMore} role="button">See More</SeeMoreLess>
          </div>
        : <div>
            <p>{reviewBody}</p>
            <SeeMoreLess onClick={clickSeeMore} role="button">See Less</SeeMoreLess>
          </div>
      : <p>{reviewBody}</p>}
    </div>
  );
}

const SeeMoreLess = styled.p`
  text-align: center;
  text-decoration: underline;
`;

ReviewBody.propTypes = {
  reviewBody: PropTypes.string,
  clickSeeMore: PropTypes.func.isRequired,
  seeMore: PropTypes.bool.isRequired,
};

export default ReviewBody;
