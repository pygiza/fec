import React from 'react';
import styled from 'styled-components';
import Overview from './overview/Overview.jsx';
import RatingsReviews from './ratings_and_reviews/RatingsReviews.jsx'

function App(props) {
  return (
    <div>
      <h1>Hello World, we're coming for you!</h1>
      <Overview />
      <RatingsReviews />
    </div>
  );
}

export default App;
