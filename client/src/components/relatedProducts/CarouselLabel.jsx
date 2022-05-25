import React from 'react';
import styled from 'styled-components';

let CaroLabel = styled.p`
  color: #787878;
`
const CarouselLabel = function({ label }) {
  return (
    <CaroLabel>{label}</CaroLabel>
  )
}

export default CarouselLabel;