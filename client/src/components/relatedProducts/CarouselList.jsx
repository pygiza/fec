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

const CarouselList = function({ data, related, addOutfit }) {

  return (
    <Carousel className='carouselList'>
      {
        data === 'related products list' ?
        related.map(product_id => {
          return <CarouselCard key={product_id} product_id={product_id} />
        }) :
        <AddOutfitCard onClick={addOutfit} />
      }
    </Carousel>
  )
}

export default CarouselList;