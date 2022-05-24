import React from 'react';
import styled from 'styled-components';

function MainBox({ image, handleClick }) {
  return (
    <Main>
      <PhotoMain src={image ? image.thumbnail_url : 'Waiting for Images'} />
      <ArrowRight value="right" onClick={handleClick} />
      <ArrowLeft value="left" onClick={handleClick} />
    </Main>
  );
}

const Main = styled.div`
  display: grid;
  grid-template-columns: 20px 1fr 20px;
  grid-template-rows: .75fr 30px 1fr;
  grid-column: 3 / 8;
  grid-row: 2 / 11;
  padding: 0.25rem;
  `;
  // border-left: solid;
  // border-color: #FFD24C;
  // border: solid;

const PhotoMain = styled.img`
  height: 100%;
  width: 100%;  
  object-fit: contain;
  grid-column: 2;
  grid-row: 1 / 4;
`;

const ArrowRight = styled.button`
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 7px;
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  grid-column: 3;
  grid-row: 2;
  background: #FFE69A;
`;

const ArrowLeft = styled.button`
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 7px;
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
  grid-column: 1;
  grid-row: 2;
  background: #FFE69A;
`;

export default MainBox;
