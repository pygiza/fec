import React from 'react';
import CarouselLabel from './CarouselLabel.jsx';
import CarouselList from './CarouselList.jsx';

const RelatedProductsContainer = function() {

  let [cards, setCards] = React.useState(['hoodie', 'jeans', 'jacket', 'shoes', 'beanie']);

  let addCard = function(card) {
    setCards(cards.concat(['card']));
  }

  return (
    <>
      <CarouselLabel label='RELATED PRODUCTS' />
      <CarouselList data='related products list' cards={cards} />
      <CarouselLabel label='YOUR OUTFIT' />
      <CarouselList data='your outfit list' addCard={addCard} />
    </>
  );
};

export default RelatedProductsContainer;
