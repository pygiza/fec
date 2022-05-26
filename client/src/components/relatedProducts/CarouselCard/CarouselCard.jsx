import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../Styles.jsx';
import CardTop from './CardTop/CardTop.jsx';
import CardBtm from './CardBtm/CardBtm.jsx';

const CarouselCard = function({ productInfo, renderProduct }) {

  let [product, setProduct] = useState(productInfo);

  // React.useEffect(() => {
  //   axios.get(`/products/${product_id}`, { params: { product_id } })
  //     .then(res => {
  //       let pData = res.data;

  //       axios.get(`/products/${product_id}/styles`, { params: { product_id } })
  //         .then(res => {
  //           pData.image = res.data.results[0].photos[0].thumbnail_url;

  //           axios.get(`/reviews/meta`, { params: { product_id } })
  //             .then(res => {
  //               pData.characteristics = res.data.characteristics;

  //               let total = 0;
  //               let reviews = 0;
  //               for (let rating in res.data.ratings) {
  //                 total += res.data.ratings[rating] * rating;
  //                 reviews += Number(res.data.ratings[rating]);
  //               }
  //               pData.rating = (Math.round( (total / reviews) * 4 ) / 4).toFixed(2);

  //               setProduct(pData);
  //             })
  //             .catch(err => console.log('couldnt grab ratings', err));
  //         })
  //         .catch(err => console.log('couldnt get photo of product', err));
  //     })
  //     .catch(err => console.log('couldnt get product', product_id, err))
  // }, [])

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
          console.log('whats the rating data type?', typeof newProduct.rating);
          setProduct(newProduct);
        })
        .catch(err => console.log('couldnt get meta data for related product', err));
      })
      .catch(err => console.log('couldnt get related products image', err));
  }, [])

  return (
    <Card onClick={() => {renderProduct(product.id)}} >
      <CardTop image={product.image} features={product.features} />
      <CardBtm category={product.category} name={product.name} price={product.default_price} rating={product.rating} />
    </Card>
  )
}

export default CarouselCard;