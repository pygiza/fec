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

const AddOutfitCard = function({ addCard }) {
  return (
    <Card onClick={addCard}>Add To Outfit +</Card>
  )
}

export default AddOutfitCard;