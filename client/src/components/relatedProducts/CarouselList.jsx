import React, { useState } from 'react';
import styled from 'styled-components';
import CarouselCard from './CarouselCard/CarouselCard.jsx';
import AddOutfitCard from './CarouselCard/AddOutfitCard.jsx';

const Carousel = styled.div`
  height: 240px;
  width: 90%;
  background-color: lightgrey;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const CarouselList = function({ data, cards, addCard }) {

  return (
    <Carousel className='carouselList'>
      {
        data === 'related products list' ?
        cards.map(card => {
          return <CarouselCard key={card} card={card} />
        }) :
        <AddOutfitCard onClick={addCard} />
      }
    </Carousel>
  )
}

export default CarouselList;