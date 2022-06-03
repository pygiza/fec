import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CarouselCard from './CarouselCard/CarouselCard.jsx';
import AddOutfitCard from './CarouselCard/AddOutfitCard.jsx';

const Carousel = styled.div`
  height: 400px;
  width: 70%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Arrow = styled.button`
  height: 100%;
  width: 10%;
  background-color: white;
  font-size: 40px;
  border: none;
  transition: box-shadow 0.25s;
  &:hover {
    box-shadow: 1px 1px grey;
  }
  transition: background 0.25s;
`

const CarouselList = function({ listType, related = [], outfit = [], addOutfit, removeOutfit, renderProduct, relatedButtonHandler, outfitButtonHandler }) {

  let [listIndex, setListIndex] = useState({ start: 0, end: 2 })
  let [length, setLength] = useState(listType === 'related' ? related.length : outfit.length);

  useEffect(() => {
    setLength(listType === 'related' ? related.length : outfit.length);
  }, [related, outfit])

  const handleMoveLeft = function() {
    if (listIndex.start <= 0) {
      return;
    }
    setListIndex({ start: listIndex.start - 1, end: listIndex.end - 1 });
  }

  const handleMoveRight = function() {
    if (listIndex.end >= length - 1) {
      return;
    }
    setListIndex({ start: listIndex.start + 1, end: listIndex.end + 1 });
  }

  return (
    <Carousel className='carouselList'>
      <Arrow onClick={handleMoveLeft} style={{ background: listIndex.start <= 0 ? 'lightgrey' : 'linear-gradient(to right, white, lightgrey)'}}>
        {listIndex.start <= 0 ?
          undefined :
          <i className='fa-solid fa-caret-left' />
        }
      </Arrow>
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
      <Arrow onClick={handleMoveRight} style={{ background: listIndex.end >= length - 1 ? 'lightgrey' : 'linear-gradient(to left, white, lightgrey)'}}>
        {listIndex.end >= length - 1 ?
          undefined :
          <i className='fa-solid fa-caret-right' />
        }
      </Arrow>
    </Carousel>
  )
}

export default CarouselList;