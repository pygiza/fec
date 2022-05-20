import React from 'react';
import styled from 'styled-components';
import CarouselCard from './CarouselCard/CarouselCard.jsx';

const Carousel = styled.div`
  height: 240px;
  width: 90%;
  background-color: lightgrey;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const CarouselList = function({ data }) {
  return (
    <Carousel className='carouselList'>
      {data}
      <CarouselCard />
      <CarouselCard />
      <CarouselCard />
      <CarouselCard />
    </Carousel>
  )
}

export default CarouselList;