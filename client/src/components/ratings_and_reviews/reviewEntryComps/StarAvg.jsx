import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function StarAvg({ rating }) {
  return (
    <OuterStars>
      <InnerStars className="stars">
        <i className="fa-regular fa-star fa-1x" />
        <i className="fa-regular fa-star fa-1x" />
        <i className="fa-regular fa-star fa-1x" />
        <i className="fa-regular fa-star fa-1x" />
        <i className="fa-regular fa-star fa-1x" />
      </InnerStars>
      <InnerFilled rating={rating}>
        <i className="fa-solid fa-star fa-1x" />
        <i className="fa-solid fa-star fa-1x" />
        <i className="fa-solid fa-star fa-1x" />
        <i className="fa-solid fa-star fa-1x" />
        <i className="fa-solid fa-star fa-1x" />
      </InnerFilled>
    </OuterStars>
  );
}

StarAvg.propTypes = {
  rating: PropTypes.number,
};

const InnerStars = styled.div`
  position: absolute;
  width: -webkit-max-content;
  width: -moz-max-content;
  width: max-content;
`;

const InnerFilled = styled.div`
  position: absolute;
  line-height: 1;
  overflow: hidden;
  white-space: nowrap;
  width: ${props => {
    let roundedRating = Math.round(props.rating * 4) / 4;
    if (roundedRating % 1 === .25) {
      return roundedRating * 18.75;
    }

    if (roundedRating % 1 === .75) {
      return roundedRating * 17.35;
    }

    return roundedRating * 18;
    }}px;
`;

const OuterStars = styled.div`
  position: relative;
  margin-bottom: 4%;
  padding-bottom: 2%;
  font-size: 1em;
`;

const Star = styled.i`
  color: #FFD24C;
  font-size: 100%;
  width: 100%
`;

export default StarAvg;
