import React from 'react';
import styled from 'styled-components';

function AddToCart() {
  return (
    <CartBox>
      Put it in your Bag... NOW!
    </CartBox>
  );
}

const CartBox = styled.div`
  grid-column: 2 / 12;
  grid-row: 9 / 13;
  padding: 0px;
  margin: 0px;
`;

export default AddToCart;
