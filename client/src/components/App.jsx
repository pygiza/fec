import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Overview from './overview/Overview.jsx';
import RelatedProductsContainer from './relatedProducts/RelatedProductsContainer.jsx';
import Question from './qComponents/questions.jsx';
import RatingsReviews from './ratings_and_reviews/RatingsReviews.jsx';
import axios from 'axios';

function App(props) {

  const defaultProduct = {
    "id": 37311,
    "campus": "hr-rfe",
    "name": "Camo Onesie",
    "slogan": "Blend in to your crowd",
    "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
    "category": "Jackets",
    "default_price": "140.00",
    "created_at": "2021-08-13T14:37:33.145Z",
    "updated_at": "2021-08-13T14:37:33.145Z",
    "features": [
        {
            "feature": "Fabric",
            "value": "Canvas"
        },
        {
            "feature": "Buttons",
            "value": "Brass"
        }
    ]
}

  let [productId, setProductId] = useState(defaultProduct.id);
  let [productInfo, setProduct] = useState(defaultProduct);
  let [productStyles, setProductStyles] = useState({});
  let [productMeta, setProductMeta] = useState({});

  const renderProduct = function(e, id) {
    if (e.target.id === 'cardButton') {
      return;
    }
    setProductId(id);
  }

 //api call for product info levi,yuki, sonia, jake
  const getProductInfo = function() {
    return axios.get(`/products/${productId}`)
      .then(res => setProduct(res.data))
      .catch(err => console.log('couldnt get product info', err));
  }

 //api call for product styles levi, yuki
  const getProductStyles = function() {
    return axios.get(`/products/${productId}/styles`)
      .then(res => setProductStyles(res.data))
      .catch(err => console.log('couldnt get product styles', err));
  }

  //api call for product meta data levi, sonia
  const getProductMeta = function() {
    return axios.get(`/reviews/meta`, { params: {product_id: productId }})
      .then(res => setProductMeta(res.data))
      .catch(err => console.log('couldnt get product meta data', err));
  }

  useEffect(() => {
    getProductInfo();
    getProductStyles();
    getProductMeta();
  }, [productId]);

  return (
    <div>
      <Overview productId={productId} productInfo={productInfo} productStyles={productStyles} productMeta={productMeta} />
      <RelatedProductsContainer productId={productId} renderProduct={renderProduct} productInfo={productInfo} productStyles={productStyles} />
      <Question productInfo={productInfo}  productId={productId} />
      <RatingsReviews productId={productId} productInfo={productInfo} productMeta={productMeta} />
    </div>
  );
}

export default App;
