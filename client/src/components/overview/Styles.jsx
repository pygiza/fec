import React, { useState } from 'react';
import styled from 'styled-components';

function StyleList({ images }) {
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
      {images ? images.map((image) => {
        console.log('Location: ', row, column);
        return (
          <EachStyle src={image.thumbnail_url} test={locationChange()} row={row} column={column} />
        );
      }) : 'Waiting on Image'}
    </Styles>
  );
}

const Styles = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0,1fr));
  grid-template-rows: repeat(2, minmax(0,1fr));
  grid-column: 2 / 12;
  grid-row: 6 / 9;
  padding: 0px;
  margin: 0px;
`;

const EachStyle = styled.img`
  height: 100%;
  width: 100%; 
  object-fit: contain;
  grid-column: ${props => props.column};
  grid-row: ${props => props.row};
`;

export default StyleList;
