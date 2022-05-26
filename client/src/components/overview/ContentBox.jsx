import React from 'react';
import styled from 'styled-components';
import StyleList from './Styles.jsx'
import AddToCart from './AddToCart.jsx'

function Content({ products, images, stylesClick }) {
  return (
    <ContentBox>
      <StarReviews>Star Reviews</StarReviews>
      <Category>{products.category}</Category>
      <ProductName>{products.name}</ProductName>
      <Price>
        ${products.default_price}
      </Price>
      <StyleList images={images} stylesClick={stylesClick}/>
      <AddToCart />
    </ContentBox>
  );
}

const ContentBox = styled.div`
  display: grid;
  grid-template-columns: repeat(12, minmax(0,1fr));
  grid-template-rows: repeat(12, minmax(0,1fr));
  gap: 0.25rem;
  grid-column: 8 / 11;
  grid-row: 2 / 11;
`;

const StarReviews = styled.h4`
  grid-column: 2 / 11;
  grid-row: 2;
  padding-bottom: 10px;
  margin: 0px;
  padding: 0px;
`;

const Category = styled.h4`
  grid-column: 2 / 11;
  grid-row: 3;
  padding: 0px;
  margin: 0px;
`;

const Price = styled.h4`
  grid-column: 2 / 11;
  grid-row: 5;
  padding: 0px;
  margin: 0px;
`;

const ProductName = styled.h2`
  grid-column: 2 / 11;
  grid-row: 4;
  padding: 0px;
  margin: 0px;
`;

export default Content;
