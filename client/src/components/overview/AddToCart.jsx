import React, { useState } from 'react';
import styled from 'styled-components';

function AddToCart({ skus }) { //sku array
  const [skuIndex, setSkuIndex] = useState(0);

  const handleSizeClick = (e) => {
    e.preventDefault();
    console.log('Size Click => ', e.target.value);
    setSkuIndex(e.target.value);
  }

  //console.log("Styles inside Add to Cart: ", skus? [...Array(skus[skuIndex].quantity).keys()] : "Whatever")
  //console.log("SKUS Add to Cart: ", skus)
  
  let quantityArr = skus ? [...Array(skus[skuIndex].quantity).keys()] : [1];
  
  return (
    <CartBox>
      <Title>
      </Title>
      <Size onChange={(e) => handleSizeClick(e)}>
        <Option value={0}>Select A Size</Option>
      {skus ? skus.map((style, index) => {
        return (
        <Option value={index} > {style.size}</Option>
        );
      }) : 'Waiting on Images... '}
      </Size>
      <Quantity>
      {quantityArr.map((num)=> {
        return (
        <Option> {num + 1}</Option>
        );
      })}
      </Quantity>
   
      <Add>
        <BagWord>
          Add to Bag
        </BagWord>
        <Plus>
          +
        </Plus>
      </Add>
      <Star>
        ✩
      </Star>
    </CartBox>
  );
}

const CartBox = styled.div`
  display: grid;
  grid-template-columns: repeat(9, minmax(0,1fr));
  grid-template-rows: repeat(7, minmax(0,1fr));
  grid-column: 2 / 12;
  grid-row: 9 / 13;
  padding: 0px;
  margin: 0px;
`;

const Title = styled.h4`
  grid-column: 1 / 5;
  grid-row: 1;
`;

const Size = styled.select`
  background: white;
  grid-column: 1 / 6;
  grid-row: 2 / 4;
`;

const Quantity = styled.select`
  background: white;
  grid-column: 7 / 10;
  grid-row: 2 / 4;
`;
const Add = styled.div`
  display: grid;
  grid-template-columns: 1fr 30% 10%;
  grid-template-rows: 20% 1fr 20%;
  background: white;
  border: solid;
  margin-top: .5em
  content-align: left;
  border-width: thin;
  grid-column: 1 / 7;
  grid-row: 5 / 7 ;
  object-fit: contain;
`;

const BagWord = styled.p`
  margin-left: .25em;
  font-size: 1.3vw;
`;

const Plus = styled.div`
grid-column: 3;
grid-row: 2 ;
font-size: 1.5vw

`;

const Star = styled.button`
  background: white;
  border: solid;
  font-size: 2em;
  border-width: thin;
  grid-column: 8 / 10;
  grid-row: 5 / 7 ;
  font-size: 2vw
`;

const Option = styled.option`
  background: white;
  font-size: 1.5vw;
`;

export default AddToCart;
