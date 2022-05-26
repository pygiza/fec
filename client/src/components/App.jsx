import React, { useState } from 'react';
import styled from 'styled-components';
import Overview from './overview/Overview.jsx';
import RelatedProductsContainer from './relatedProducts/RelatedProductsContainer.jsx';
import Question from './qComponents/questions.jsx';
import RatingsReviews from './ratings_and_reviews/RatingsReviews.jsx';

function App(props) {

  let [productId, setProductId] = useState(37311);

  const renderProduct = function(id) {
    setProductId(id);
  }

  return (
    <div>
      <Overview productId={productId}/>
      <RelatedProductsContainer product_id={productId} renderProduct={renderProduct} />
      <Question />
      <RatingsReviews productId={productId}/>
    </div>
  );
}

export default App;
