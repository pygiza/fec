import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Card = styled.div`
  height: 240px;
  width: 180px;
  background-color: lightgreen;
`

const CarouselCard = function({ product_id }) {

  let [product, setProduct] = useState({});
  useEffect(() => {
    axios.get(`/products/${product_id}`, {
      params: { product_id }
    })
    .then(res => {
      setProduct(res.data);
    })
    .catch(err => {
      console.log('couldnt get product', product_id, err);
    })
  }, [])

  return (
    <Card>
      <p>{product.category}</p>
      <p>{product.name}</p>
      <p>{product.default_price}</p>
    </Card>
  )
}

export default CarouselCard;