import React from 'react';
import CarouselLabel from './CarouselLabel.jsx';
import CarouselList from './CarouselList.jsx';

const RelatedProductsContainer = function() {
  return (
    <>
      <CarouselLabel label='RELATED PRODUCTS' />
      <CarouselList data='related products list' />
      <CarouselLabel label='YOUR OUTFIT' />
      <CarouselList data='your outfit list' />
    </>
  );
};

export default RelatedProductsContainer;
