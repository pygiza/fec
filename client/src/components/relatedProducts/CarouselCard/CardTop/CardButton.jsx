import React from 'react';
import styled from 'styled-components';

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
  return (
    <CaroBtn value='button'>☆</CaroBtn>
  )
}

export default CarouselButton