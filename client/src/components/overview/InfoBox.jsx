import React, { useState } from 'react';
import styled from 'styled-components';

function InfoBox({ products }) {
 return (
   <Info>
    <StarReviews>✩✩✩✩✩ read all reviews</StarReviews>
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
  grid-column: 2 / 12;
  grid-row: 1 / 5;
`;

const StarReviews = styled.div`
  grid-column: 1;
  grid-row: 2;
  font-weight: bold;
  margin: 0px;
  font-size: 1.3vw;
`;

const Category = styled.div`
  grid-column: 1;
  grid-row: 3;
  padding: 0px;
  margin-top: .85em;
  font-size: 1.2vw;
`;

const ProductName = styled.div`
  grid-column: 1;
  grid-row: 4;
  font-size: 3vw;
  padding: 0px;
  margin-top: .16em;
`;

const Price = styled.h4`
  grid-column: 1;
  grid-row: 5;
  padding: 0px;
  margin-top: 3.3em;
  font-size: 1.3vw;
`;


export default InfoBox;