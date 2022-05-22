import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  height: 240px;
  width: 180px;
  background-color: lightgreen;
`

const CarouselCard = function({ card }) {
  return (
    <Card>
      {card}
    </Card>
  )
}

export default CarouselCard;