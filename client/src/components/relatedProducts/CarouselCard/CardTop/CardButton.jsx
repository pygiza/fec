import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const CaroBtn = styled.button`
  position: absolute;
  top: 5%;
  right: 5%;
  background-color: light-grey;
  font-size: 16px;
  height: 30px;
  width: 30px;
  text-align: center;
`

const CarouselButton = function(props) {

  const renderCompareProducts = function(main, related) {

  }

  return (
    <CaroBtn id='cardButton' onClick={renderCompareProducts}>☆</CaroBtn>
  )
}

CarouselButton.propTypes = {
  features: PropTypes.object.isRequired,
}

export default CarouselButton