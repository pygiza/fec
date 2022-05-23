import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Card = styled.div`
  height: 240px;
  width: 180px;
  background-color: lightgreen;
`

const Thumbnail = styled.img`
  width: 180px;
`

const CarouselCard = function({ product_id }) {

  let [product, setProduct] = useState({});

  useEffect(() => {
    axios.get(`/products/${product_id}`, { params: { product_id } })
      .then(res => {
        let pData = res.data;

        axios.get(`/products/${product_id}/styles`, { params: { product_id } })
          .then(res => {
            pData.image = res.data.results[0].photos[0].thumbnail_url;

            axios.get(`/reviews/meta`, { params: { product_id } })
              .then(res => {
                pData.characteristics = res.data.characteristics;

                let total = 0;
                let reviews = 0;
                for (let rating in res.data.ratings) {
                  total += res.data.ratings[rating] * rating;
                  reviews += Number(res.data.ratings[rating]);
                }
                pData.rating = (Math.round( (total / reviews) * 4 ) / 4).toFixed(2);

                setProduct(pData);
              })
              .catch(err => console.log('couldnt grab ratings', err));
          })
          .catch(err => console.log('couldnt get photo of product', err));
      })
      .catch(err => console.log('couldnt get product', product_id, err))
  }, [])

  return (
    <Card>
      <p>Category: {product.category}</p>
      <p>Name: {product.name}</p>
      <p>Price: {product.default_price ? '$' + product.default_price : undefined}</p>
      <p>Rating: {product.rating}</p>
      <Thumbnail src={product.image}></Thumbnail>
    </Card>
  )
}

export default CarouselCard;