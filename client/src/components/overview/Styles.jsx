import React, { useState } from 'react';
import styled from 'styled-components';

function StyleList({ images, stylesClick, stylesIndex }) {
  let row = 2;
  let column = 0;

  const locationChange = () => {
    if (column === 4) { // this how many columns there are
      column = 1;
      row = 3;
    } else {
      column += 1;
    }
  };


  //console.log('Images In Styles',images);
  return (
    
    <Styles>
      <StyleSelected>STYLE: {images ? images[stylesIndex].name : "Select a Style"} </StyleSelected>
      {images ? images.map((image, index) => {
        return (
          <EachStyle 
            key={index}
            id={index} 
            src={image.photos[0].thumbnail_url} 
            test={locationChange()} 
            row={row} 
            column={column}
            onClick={stylesClick}
            
            />
        );
      }) : 'Waiting on Image'}
    </Styles>
  );
}

const Styles = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0,1fr));
  grid-template-rows: 15% repeat(2, minmax(0,1fr));
  grid-gap: 0.25rem;
  grid-column: 2 / 12;
  grid-row: 5 / 9;
  
  
`;

const StyleSelected = styled.div`
  grid-column: 1 / 5;
  grid-row: 1;
  font-size: 1.3vw;
  margin-top: .7vw
`;

const EachStyle = styled.img`
  height: 100%;
  width: 100%; 
  object-fit: cover;
  grid-column: ${props => props.column};
  grid-row: ${props => props.row};

  &:hover {
    border: solid;
    border-color: white;
  }
`;

export default StyleList;
