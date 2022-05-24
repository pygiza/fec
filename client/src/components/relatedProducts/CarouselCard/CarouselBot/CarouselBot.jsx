import React from 'react';

const CarouselBot = function({ category, name, price, rating }) {
  return (
    <>
      <p>Category: {category}</p>
      <p>Name: {name}</p>
      <p>price: {price}</p>
      <p>rating: {rating}</p>
    </>
  )
}

export default CarouselBot;