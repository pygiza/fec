import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Icon = styled.button`
  position: absolute;
  top: 5%;
  right: 5%;
  background-color: light-grey;
  font-size: 16px;
  height: 30px;
  width: 30px;
  text-align: center;
`

const CarouselButton = function({ name, features, onClick }) {
  return (
    <Icon className="fa-solid fa-arrow-right-arrow-left" id='cardButton' onClick={(e) => onClick(e, name, features)} />
  )
}

CarouselButton.propTypes = {
  name: PropTypes.string.isRequired,
  features: PropTypes.array.isRequired,
}

export default CarouselButton