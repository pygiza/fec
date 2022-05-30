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

const ArrowLeft = styled.button`
  height: 100%;
  background-color: white;
  font-size: 40px;
  border: none;
  background: linear-gradient(to right, white, lightgrey);
`

const ArrowRight = styled.button`
  height: 100%;
  background-color: white;
  font-size: 40px;
  border: none;
  background: linear-gradient(to left, white, lightgrey);
`

const CarouselList = function({ listType, related = [], outfit = [], addOutfit, removeOutfit, renderProduct, relatedButtonHandler, outfitButtonHandler }) {

  let [listIndex, setListIndex] = useState({ start: 0, end: 2 })

  const handleMoveLeft = function() {
    if (listIndex.start <= 0) {
      return;
    }
    setListIndex({ start: listIndex.start - 1, end: listIndex.end - 1 });
  }

  const handleMoveRight = function() {
    let length = listType === 'related' ? related.length - 1 : outfit.length - 1;
    if (listIndex.end >= length) {
      return;
    }
    setListIndex({ start: listIndex.start + 1, end: listIndex.end + 1 });
  }

  return (
    <Carousel className='carouselList'>
      <ArrowLeft onClick={handleMoveLeft}>
        {}
        <i className='fa-solid fa-caret-left' />
      </ArrowLeft>
      {
        listType === 'related' ?
          <>
            {related.map((product, index) => {
              return listIndex.start <= index && index <= listIndex.end ?
                <CarouselCard key={product.id} product={product} renderProduct={renderProduct} relatedButtonHandler={relatedButtonHandler} /> : undefined
            })}
          </> : undefined
      }
      {
        listType === 'outfit' ?
          <>
            {outfit.map((product, index) => {
              if (listIndex.start <= index && index <= listIndex.end) {
                return product === 'add' ? <AddOutfitCard key='add' addOutfit={addOutfit} /> :
                <CarouselCard key={product.id} product={product} renderProduct={renderProduct} outfitButtonHandler={outfitButtonHandler} noName={true} />
              } else {
                return undefined;
              }
            })}
          </> : undefined
      }
      <ArrowRight onClick={handleMoveRight}><i className='fa-solid fa-caret-right' /></ArrowRight>
    </Carousel>
  )
}

export default CarouselList;