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
      <InnerFilled style={{ width: (100 / 5) * rating }}>
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
  width: 100px;
`;

const InnerFilled = styled.div`
  position: absolute;
  height: 15px;
  line-height: 1;
  overflow: hidden;
`;

const OuterStars = styled.div`
  position: relative;
  margin-bottom: 4%;
`;

export default StarAvg;
