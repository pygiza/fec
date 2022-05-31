import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../Styles.jsx';
import CardTop from './CardTop/CardTop.jsx';
import CardBtm from './CardBtm/CardBtm.jsx';

const CarouselCard = function({ product, renderProduct, relatedButtonHandler, outfitButtonHandler, noName }) {
  return (
    <Card onClick={(e) => {renderProduct(e, product.id)}} >
      <CardTop id={product.id} image={product.image} name={noName ? undefined : product.name} features={product.features} relatedButtonHandler={relatedButtonHandler} outfitButtonHandler={outfitButtonHandler} />
      <CardBtm category={product.category} name={product.name} price={product.default_price} rating={product.rating} />
    </Card>
  )
}

export default CarouselCard;