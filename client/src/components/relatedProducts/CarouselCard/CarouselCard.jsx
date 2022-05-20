import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  height: 240px;
  width: 180px;
  background-color: lightgreen;
`

const CarouselCard = function({ cardData }) {
  return (
    <Card>
      {cardData.productName}
    </Card>
  )
}

export default CarouselCard;