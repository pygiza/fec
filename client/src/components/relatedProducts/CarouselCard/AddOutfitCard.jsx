import React from 'react';
import styled from 'styled-components';
import Card from '../Styles.jsx';

const AddCard = styled(Card)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
`

const AddOutfitCard = function({ addOutfit, removeOutfit }) {
  return (
    <AddCard>
      <button onClick={addOutfit} style={{height: '100%', width: '100%'}} >add to outfit +</button>
    </AddCard>
  )
}

export default AddOutfitCard;