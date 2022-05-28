import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CarouselCard from './CarouselCard/CarouselCard.jsx';
import AddOutfitCard from './CarouselCard/AddOutfitCard.jsx';
import PropTypes from 'prop-types';

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
  const [refresh, setRefresh] = useState(1);

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
        console.log('what our outfit indexes (left)?', outfitIndex);
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
        console.log('what our outfit indexes (right before)?', relatedIndex);
        setRelatedIndex({ start: relatedIndex.start + 1, end: relatedIndex.end + 1 })
        console.log('what our outfit indexes (right)?', relatedIndex);
        break;

      case 'outfit':
        if (outfitIndex.end >= outfit.length - 1) {
          console.log('you telling me we never get in here?');
          break;
        }
        console.log('what our outfit indexes (right before)?', outfitIndex);
        setOutfitIndex({ start: outfitIndex.start + 1, end: outfitIndex.end + 1 })
        console.log('what our outfit indexes (right)?', outfitIndex);
        break;

      default:
        console.log('couldnt move outfit carousel');
    }
  }

  const moveOutfitRight = function() {
    setOutfitIndex({ start: 1, end: 3})
  }

  useEffect(() => {
    console.log('hey i got triggered  when related index changed!');
  }, [relatedIndex]);
  useEffect(() => {
    console.log('hey i got triggered when outfit index changed!');
  }, [outfitIndex]);
  // console.log('what is related', related);
  // console.log('what is outfit', outfit);

  return (
    <Carousel className='carouselList'>
      <button onClick={handleMoveLeft}>⬅️</button>
      {
        listType === 'related' ?
          <>
            {related.map((product, index) => {
              console.log('relatedIndex start and end and index', relatedIndex.start, relatedIndex.end, index);
              return relatedIndex.start <= index && index <= relatedIndex.end ?
                <CarouselCard key={product.id} productInfo={product} renderProduct={renderProduct} handleCardButtonClick={handleCardButtonClick} /> : undefined
            })}
          </> : undefined
      }
      {
        listType === 'outfit' ?
          <>
            {/* <AddOutfitCard addOutfit={addOutfit} removeOutfit={removeOutfit} /> */}
            <button onClick={() => setRefresh(refresh + 1)} />
            {/* {outfit[0] !== undefined ? <CarouselCard key={outfit[0].id} productInfo={outfit[0]} renderProduct={renderProduct} /> : undefined} */}

            {/* {outfit.map((product, index) => {
              console.log('outfit index updated!', outfitIndex, index);
              console.log('what my outfit', outfit);
              if (index >= outfitIndex.start) {
                return <CarouselCard key={product.id} productInfo={product} renderProduct={renderProduct} />
              } else {
                return undefined;
              }
            })} */}

            {/* {outfit.map((product, index) => {
              console.log('outfitIndex start and end and index', outfitIndex.start, outfitIndex.end, index);
              console.log('this is true', outfitIndex.start <= index && index <= outfitIndex.end);
              return outfitIndex.start <= index && index <= outfitIndex.end ?
                <CarouselCard key={product.id} productInfo={product} renderProduct={renderProduct} handleCardButtonClick={handleCardButtonClick} /> : undefined
            })} */}
          </> : undefined
      }
      <button onClick={moveOutfitRight}>➡️</button>
    </Carousel>
  )
}

// CarouselList.propTypes = {
//   related: PropTypes.array.isRequired,
//   outfit: PropTypes.array.isRequired
// }

export default CarouselList;