import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  height: 240px;
  width: 180px;
  background-color: lightgreen;
  display: flex;
  justify-content: center;
  align-items: center;
`

const AddOutfitCard = function({ onClick }) {
  return (
    <Card onClick={onClick}>add to outfit</Card>
  )
}

export default AddOutfitCard;