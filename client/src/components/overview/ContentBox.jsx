import React from 'react';
import styled from 'styled-components';
import StyleList from './Styles.jsx'
import AddToCart from './AddToCart.jsx'
import InfoBox from './InfoBox.jsx'

function Content({ products, styles, stylesClick, skus, stylesIndex }) {
  //console.log('CONTENT BOX SKUS: ', skus)
  return (
    <ContentBox>
      <InfoBox products={products}/>
      <StyleList images={styles} stylesClick={stylesClick} stylesIndex={stylesIndex}/>
      <AddToCart skus={skus}/>
    </ContentBox>
  );
}

const ContentBox = styled.div`
  display: grid;
  grid-template-columns: repeat(12, minmax(0,1fr));
  grid-template-rows: repeat(12, minmax(0,1fr));
  gap: 0.25rem;
  grid-column: 8 / 11;
  grid-row: 2 / 11;
`;



export default Content;
