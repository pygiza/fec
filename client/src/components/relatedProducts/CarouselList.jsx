import React from 'react';
import styled from 'styled-components';

const Carousel = styled.div`
  height: 240px;
  width: 90%;
  background-color: lightgrey;
`;

const CarouselList = function({ data }) {
  return (
    <Carousel className='carouselList'>
      {data}
    </Carousel>
  )
}

export default CarouselList;