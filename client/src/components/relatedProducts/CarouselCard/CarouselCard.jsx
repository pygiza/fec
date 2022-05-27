import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../Styles.jsx';
import CardTop from './CardTop/CardTop.jsx';
import CardBtm from './CardBtm/CardBtm.jsx';

const CarouselCard = function({ productInfo, renderProduct, handleCardButtonClick }) {

  let [product, setProduct] = useState(productInfo);

  // get avg rating accurate to a quarter of a star
  const calculateAvgRating = function(ratings) {
    let reviews = 0;
    let ratingSum = 0;
    for (let rating in ratings) {
      ratingSum += ratings[rating] * rating;
      reviews += Number(ratings[rating]);
    }
    return (Math.round((ratingSum/reviews) * 4) / 4);
  }

  useEffect(() => {
    let newProduct = Object.assign({}, productInfo)
    axios.get(`/products/${productInfo.id}/styles`)
    .then(res => {
      newProduct.image = res.data.results[0].photos[0].thumbnail_url

      axios.get(`/reviews/meta`, { params: { product_id: productInfo.id } })
        .then(res => {
          newProduct.rating = calculateAvgRating(res.data.ratings);
          setProduct(newProduct);
        })
        .catch(err => console.log('couldnt get meta data for related product', err));
      })
      .catch(err => console.log('couldnt get related products image', err));
  }, [])

  return (
    <Card onClick={(e) => {renderProduct(e, product.id)}} >
      <CardTop image={product.image} name={product.name} features={product.features} handleCardButtonClick={handleCardButtonClick} />
      <CardBtm category={product.category} name={product.name} price={product.default_price} rating={product.rating} />
    </Card>
  )
}

export default CarouselCard;