import React from 'react';
import styled from 'styled-components';
import Overview from './overview/Overview.jsx';
import RelatedProductsContainer from './relatedProducts/RelatedProductsContainer.jsx';
import Question from './qComponents/questions.jsx';
import RatingsReviews from './ratings_and_reviews/RatingsReviews.jsx';

function App(props) {
  return (
    <div>
      <h1>PyGiza</h1>
      <Overview />
      <RelatedProductsContainer />
      <Question />
      <RatingsReviews />
    </div>
  );
}

export default App;
