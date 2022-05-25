import React from 'react';
import styled from 'styled-components';

function MainBox({ image, handleClick }) {
  return (
    <Main>
      <PhotoMain src={image ? image.thumbnail_url : 'Waiting for Images'} />
      <ThumbnailBox />
      <ArrowRight value="right" onClick={handleClick} />
      <ArrowLeft value="left" onClick={handleClick} />
    </Main>
  );
}

const Main = styled.div`
  display: grid;
  grid-template-columns: 20% 20px 1fr 20px;
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
  grid-column: 1 / 4;
  grid-row: 1 / 4;
`;

const ThumbnailBox = styled.div`
  display: grid;
  grid-template-columns: 10% 80% 10%;
  grid-template-rows: 10% repeat(5, minmax(0,1fr)) 10%;
  grid-column: 1;
  grid-row: 1 / 4;
`;

const EachStyle = styled.img`
  height: 100%;
  width: 100%; 
  object-fit: contain;
  grid-column: ${props => props.column};
  grid-row: ${props => props.row};
`;

const ArrowRight = styled.button`
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 7px;
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  grid-column: 4;
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
  grid-column: 2;
  grid-row: 2;
  background: #FFE69A;
`;

export default MainBox;
