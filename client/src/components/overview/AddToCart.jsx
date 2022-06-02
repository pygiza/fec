import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';


function AddToCart({ skus }) { //sku array
  const [skuIndex, setSkuIndex] = useState(0);
  const [skuQuantity, setSkuQuantity] = useState(0);
  const [countUpdate, setCountUpdate] = useState(0);
  const [quantityArr, setQuantityArr] = useState([0]);


  useEffect(()=>{
    setQuantityArr(skus ? [...Array(skus[skuIndex].quantity).keys()] : [-1]);
  }, [skuIndex]);

  const handleSizeClick = (e) => {
    e.preventDefault();
    setSkuIndex(Number(e.target.value));
    console.log('Size Click => ', e.target.value);
  }

  const quantitySetter = (e) => {
    e.preventDefault();
    console.log('Quantity => ', e.target.value);
    setSkuQuantity(Number(e.target.value));
  }
  
  const addQuantityToBag = (e) => {
    console.log('THE BUTTON CLICKED ===', e.target)
    let reqArray = [];
    for (let i = 0; i < skuQuantity; i++) {
      let newPromise = axios({
        method: 'post',
        url: 'http://localhost:3000/cart',
        data: {sku_id : skus[skuIndex].id}
      });
      reqArray.push(newPromise);
    }

    axios.all(reqArray)
    .then(axios.spread((...responses) => {
      setCountUpdate(countUpdate + skuQuantity);
      console.log('All Done Updating Cart');
    }));
  }

  
  return (
    <CartBox>
      <Title>
      </Title>
      <Size data-testid="size" onChange={(e) => handleSizeClick(e)}>
        {/* <Option value={0}>Select A Size</Option> */}
      {skus ? skus.map((style, index) => {
        return (
        <Option key={index} data-testid='select-option' value={index} > {style.size}</Option>
        );
      }) : 'Waiting on Images... '}
      </Size>

      <Quantity data-testid='quantity'onChange={quantitySetter}>
        <Option value={0}>Select</Option>
      {quantityArr.map((num, index)=> {
        return (
        <Option data-testid='select-quantity' key={index} value={num + 1}> {num + 1}</Option>
        );
      })}
      </Quantity>
      {skuQuantity ? <Add data-testid='add' onClick={addQuantityToBag}>
        <BagWord>Add to Bag</BagWord>
        <Plus>+</Plus>
      </Add>
      : null}
      <Star>
       <CartNumber>
        {countUpdate}
      </CartNumber> 
      <i className="fa-solid fa-cart-shopping"></i>
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
  color: black;
  grid-column: 1 / 6;
  grid-row: 2 / 4;
`;

const Quantity = styled.select`
  background: white;
  color: black;
  grid-column: 7 / 10;
  grid-row: 2 / 4;
  `;

const Option = styled.option`
  background: white;
  color: black;
  font-size: 1.5vw;
`;

const Add = styled.button`
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

const CartNumber = styled.div`
  font-size: .75vw;
`;


export default AddToCart;
