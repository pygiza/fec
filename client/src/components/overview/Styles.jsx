import React, { useState } from 'react';
import styled from 'styled-components';

function StyleList({ images, stylesClick }) {
  // const [row, setRow] = useState(1);
  // const [column, setColumn] = useState(1);

  let row = 1;
  let column = 0;

  const locationChange = () => {
    if (column === 4) { // this how many columns there are
      column = 1;
      row = 2;
    } else {
      column += 1;
    }
  };

  return (
    <Styles>
      {images ? images.map((image, index) => {
        return (
          <EachStyle 
            id={index} 
            src={image.thumbnail_url} 
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
  grid-template-rows: repeat(2, minmax(0,1fr));
  grid-gap: 0.25rem;
  grid-column: 2 / 12;
  grid-row: 6 / 9;
`;

const EachStyle = styled.img`
  height: 100%;
  width: 100%; 
  object-fit: cover;
  grid-column: ${props => props.column};
  grid-row: ${props => props.row};
`;

export default StyleList;
