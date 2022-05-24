import React from 'react';
import styled from 'styled-components';
import Card from '../Styles.jsx';

const AddCard = styled(Card)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
`

const AddOutfitCard = function({ onClick }) {
  return (
    <AddCard onClick={onClick}>add to outfit +</AddCard>
  )
}

export default AddOutfitCard;