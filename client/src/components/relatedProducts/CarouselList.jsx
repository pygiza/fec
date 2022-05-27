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

const CarouselList = function({ listType, related = [], outfit = [], addOutfit, removeOutfit, renderProduct, handleCardButtonClick }) {

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
      {/* {
        // If list type is 'related products', load the related products carousel.
        related.length === 0 && outfit.length === 0 ? undefined :

        listType === 'related' ?
        related.map((product, index) => {
          console.log('im getting invoked a lot arent i', product);
          if (listIndex.start <= index && index <= listIndex.end)
          return <CarouselCard key={product.id} productInfo={product} renderProduct={renderProduct} />
        }) :
        // Otherwise, load the outfit carousel
        <>
          <AddOutfitCard onClick={addOutfit} removeOutfit={removeOutfit} />
          {outfit.map(product => <CarouselCard key={product.id} renderProduct={renderProduct} />) }
        </>
      } */}
      {
        listType === 'related' ?
        related.map((product, index) => {
          return listIndex.start <= index && index <= listIndex.end ?
            <CarouselCard key={product.id} productInfo={product} renderProduct={renderProduct} handleCardButtonClick={handleCardButtonClick} /> : undefined
        }) : undefined
        // outfit.map(product => <CarouselCard key={product.id} productInfo={product} renderProduct={renderProduct} />)
      }


      <button onClick={handleMoveRight}>➡️</button>
    </Carousel>
  )
}

export default CarouselList;