import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function StarAvg({ rating }) {
  return (
    <OuterStars>
      <InnerStars className="stars">
        <i className="fa-regular fa-star" />
        <i className="fa-regular fa-star" />
        <i className="fa-regular fa-star" />
        <i className="fa-regular fa-star" />
        <i className="fa-regular fa-star" />
      </InnerStars>
      <InnerFilled rating={rating}>
        <i className="fa-solid fa-star" />
        <i className="fa-solid fa-star" />
        <i className="fa-solid fa-star" />
        <i className="fa-solid fa-star" />
        <i className="fa-solid fa-star" />
      </InnerFilled>
    </OuterStars>
  );
}

StarAvg.propTypes = {
  rating: PropTypes.number.isRequired,
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
      return roundedRating * 17.25;
    }

    return roundedRating * 18;
    }}px;
`;

const OuterStars = styled.div`
  position: relative;
  margin-bottom: 4%;
`;

export default StarAvg;
