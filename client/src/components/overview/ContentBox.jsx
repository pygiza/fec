import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

function Content({ products }) {
  return (
    <ContentBox>
      <StarReviews>Star Reviews</StarReviews>
      <ProductName>{products.name}</ProductName>
    </ContentBox>
  );
}

const ContentBox = styled.div`
display: grid;
grid-template-columns: repeat(12, minmax(0,1fr));
grid-template-rows: repeat(12, minmax(0,1fr));
gap: 0.25rem;
border: solid;
grid-column: 8 / 11;
grid-row: 2 / 11;
`;

const StarReviews = styled.h4`
  grid-column: 2 / 11;
  grid-row: 1;
  padding: 10px;
  margin: 0px;
`;

const ProductName = styled.h2`
  grid-column: 2 / 11;
  grid-row: 2;
  padding: 0px;
  margin: 0px;
`;

export default Content;
