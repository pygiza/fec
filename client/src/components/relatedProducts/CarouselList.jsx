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

let cards = ['hoodie', 'jeans', 'jacket', 'shoes', 'beanie']

const CarouselList = function({ data }) {
  return (
    <Carousel className='carouselList'>
      {
        data === 'related products list' ?
        cards.map(card => {
          return <CarouselCard cardData={{ productName: card }} />
        }) :
        undefined
      }
    </Carousel>
  )
}

export default CarouselList;