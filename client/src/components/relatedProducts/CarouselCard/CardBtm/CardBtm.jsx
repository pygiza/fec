import React from 'react';
import styled from 'styled-components';
import StarAvg from '../../../ratings_and_reviews/reviewEntryComps/StarAvg.jsx';

const Btm = styled.div`
  font-family: sans-serif;
  margin-left: 5px;
  margin-right: 5px;
  position: relative;
  height: 40%;
`

const StarRating = function(rating) {
  return (
    <div style={{position: 'absolute', left: '5px', bottom: '43px'}}>
      <StarAvg rating={rating} />
    </div>
  )
}

const CardBtm = function({ category, name, price, rating }) {
  return (
    <Btm>
      <p style={{color: 'grey', marginBottom: '5px'}}>{category}</p>
      <p style={{fontSize: '20px', fontWeight: 'bold', marginTop: '5px'}}>{name}</p>
      <p style={{position: 'absolute', left: '5px', bottom: '35px'}}>${price}</p>
      {rating ? StarRating(rating) : undefined}
    </Btm>
  )
}

export default CardBtm;