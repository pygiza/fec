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

const CarouselList = function({ data }) {

  let [cards, setCards] = useState(['hoodie', 'jeans', 'jacket', 'shoes', 'beanie']);

  let addCard = function(card) {
    this(cards.concat([card]));
  }

  addCard = addCard.bind(setCards);

  return (
    <Carousel className='carouselList'>
      {
        data === 'related products list' ?
        cards.map(card => {
          return <CarouselCard key={card} cardData={{ productName: card }} />
        }) :
        <AddOutfitCard addCard={() => addCard('Nikes')}/>
      }
      <button onClick={() => addCard('socks')}>add socks</button>
    </Carousel>
  )
}

export default CarouselList;