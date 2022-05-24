import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import CarouselTop from './CarouselTop/CarouselTop.jsx';
import CarouselBot from './CarouselBot/CarouselBot.jsx';

const Card = styled.div`
  height: 400px;
  width: 250px;
  background-color: lightgreen;
`

const Thumbnail = styled.img`
  -webkit-mask-image: -webkit-gradient(linear, left 50%, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)));
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
      <CarouselTop image={product.image} characteristics={product.characteristics} />
      <CarouselBot category={product.category} name={product.name} price={product.default_price} rating={product.rating} />
    </Card>
  )
}

export default CarouselCard;