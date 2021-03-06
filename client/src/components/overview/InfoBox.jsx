import axios from 'axios';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import StarAvg from '../ratings_and_reviews/reviewEntryComps/StarAvg.jsx';


function InfoBox({ products, productMeta }) {
  const [rating, setRating] = useState(0);

  const currentRating = () => {

      let total = 0;
      let reviews = 0;
      for (let rating in productMeta.ratings) {
        total += productMeta.ratings[rating] * rating;
        reviews += Number(productMeta.ratings[rating]);
      }
      let starRating = (Math.round( (total / reviews) * 4 ) / 4);

      return starRating;
  }

  const handleReviewClick = () => {
    document.getElementById('reviews').scrollIntoView({ behavior: 'smooth' });
  }

return (
  <Info>
    <StarReviews>
      <StarAvg rating={currentRating()}>read all reviews {rating}</StarAvg>
    </StarReviews>
    <AllReviews onClick={document.getElementById('reviews') ? handleReviewClick : null}>Read All Reviews</AllReviews>
    <Category>Category: {products.category}</Category>
    <ProductName>{products.name}</ProductName>
    <Price>
      ${products.default_price}
    </Price>
</Info>
);

};

const Info = styled.div`
  display: grid;
  grid-template-rows: 20% 10% 10% 20% 15% 1fr;
  grid-template-columns: 30% 1fr;
  grid-column: 2 / 12;
  grid-row: 1 / 5;
`;

const StarReviews = styled.div`
  grid-column: 1;
  grid-row: 2;

`;

const AllReviews = styled.div`
  grid-column: 2;
  padding-left: 20%;
  grid-row: 2;
  font-size: .9vw;
  margin-top: .4em;
  &:hover {
    cursor: pointer;
  }
`;

const Category = styled.div`
  grid-column: 1 / 3;
  grid-row: 3;
  padding: 0px;
  margin-top: .85em;
  font-size: 1.2vw;
`;

const ProductName = styled.div`
  grid-column: 1 / 3;
  grid-row: 4;
  font-size: 3vw;
  padding: 0px;
  margin-top: .16em;
`;

const Price = styled.h4`
  grid-column: 1 / 3;
  grid-row: 5;
  padding: 0px;
  margin-top: 3.3em;
  font-size: 1.3vw;
`;


export default InfoBox;