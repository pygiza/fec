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

const CarouselList = function({ listType, related = [], outfit = [], addOutfit, removeOutfit, renderProduct, relatedButtonHandler, outfitButtonHandler }) {

  const [relatedIndex, setRelatedIndex] = useState({ start: 0, end: 2 });
  const [outfitIndex, setOutfitIndex] = useState({ start: 0, end: 1 });

  const handleMoveLeft = function() {
    switch (listType) {
      case 'related':
        if (relatedIndex.start <= 0) {
          break;
        }
        setRelatedIndex({ start: relatedIndex.start - 1, end: relatedIndex.end - 1 })
        break;

      case 'outfit':
        if (outfitIndex.start <= 0) {
          break;
        }
        setOutfitIndex({ start: outfitIndex.start - 1, end: outfitIndex.end - 1 })
        break;

      default:
        console.log('couldnt move related carousel');
    }
  }

  const handleMoveRight = function() {
    switch (listType) {
      case 'related':
        if (relatedIndex.end >= related.length - 1) {
          break;
        }
        setRelatedIndex({ start: relatedIndex.start + 1, end: relatedIndex.end + 1 })
        break;

      case 'outfit':
        if (outfitIndex.end >= outfit.length - 1) {
          break;
        }
        setOutfitIndex({ start: outfitIndex.start + 1, end: outfitIndex.end + 1 })
        break;

      default:
        console.log('couldnt move outfit carousel');
    }
  }

  const moveOutfitRight = function() {
    setOutfitIndex({ start: outfitIndex.start + 1, end: outfitIndex.end + 1 })
  }

  return (
    <Carousel className='carouselList'>
      <button onClick={handleMoveLeft}>⬅️</button>
      {
        listType === 'related' ?
          <>
            {related.map((product, index) => {
              return relatedIndex.start <= index && index <= relatedIndex.end ?
                <CarouselCard key={product.id} productInfo={product} renderProduct={renderProduct} relatedButtonHandler={relatedButtonHandler} /> : undefined
            })}
          </> : undefined
      }
      {
        listType === 'outfit' ?
          <>
            <AddOutfitCard addOutfit={addOutfit} />
            {outfit.map((product, index) => {
              if (outfitIndex.start <= index && index <= outfitIndex.end) {
                return <CarouselCard key={product.id} productInfo={product} renderProduct={renderProduct} outfitButtonHandler={outfitButtonHandler} noName={true} />
              } else {
                return undefined;
              }
            })}
          </> : undefined
      }
      <button onClick={handleMoveRight}>➡️</button>
    </Carousel>
  )
}

export default CarouselList;