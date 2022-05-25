import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CarouselCard from './CarouselCard/CarouselCard.jsx';
import AddOutfitCard from './CarouselCard/AddOutfitCard.jsx';

const Carousel = styled.div`
  height: 400px;
  width: 70%;
  background-color: lightgrey;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const CarouselList = function({ listType, related, outfit, addOutfit, removeOutfit }) {

  const [listIndex, setListIndex] = useState({ start: 0, end: 2 });

  const handleMoveLeft = function() {
    if (listIndex.start === 0) {
      return;
    }
    setListIndex({ start: listIndex.start - 1, end: listIndex.end - 1 })
  }

  const handleMoveRight = function() {
    if (listIndex.end === related.length - 1) {
      return;
    }
    setListIndex({ start: listIndex.start + 1, end: listIndex.end + 1 })
  }

  return (
    <Carousel className='carouselList'>
      <button onClick={handleMoveLeft}>⬅️</button>
      {
        // If list type is 'related products', load the related products carousel.
        listType === 'related' ?
        related.map((product_id, index) => {
          if (listIndex.start <= index && index <= listIndex.end)
          return <CarouselCard key={product_id} product_id={product_id} />
        }) :
        // Otherwise, load the outfit carousel
        <>
          <AddOutfitCard onClick={addOutfit} removeOutfit={removeOutfit} />
          {outfit.map(product_id => <CarouselCard key={product_id} product_id={product_id} />) }
        </>
      }
      <button onClick={handleMoveRight}>➡️</button>
    </Carousel>
  )
}

export default CarouselList;