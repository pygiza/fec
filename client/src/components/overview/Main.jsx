import React, { useState } from 'react';
import styled from 'styled-components';
import ThumbnailBox from './ThumbnailBox.jsx';

function MainBox({ image, handleClick, images, currentImageIndex, updateLocation, firstThumbnail, lastThumbnail }) {
  const [expandColumnEnd, setExpandColumnEnd] = useState(8);

  const changeMain = () => {
    expandColumnEnd === 8 ? setExpandColumnEnd(11) : setExpandColumnEnd(8);
  }

  return (
    <Main columnEnd={expandColumnEnd}>
      <PhotoMain src={image ? image.thumbnail_url : undefined} />
      <ThumbnailBox images={images()} updateLocation={updateLocation} currentImageIndex={currentImageIndex}/>
      <ArrowRight value="right" onClick={handleClick} />
      <ArrowLeft value="left" onClick={handleClick} />
      <Expanded>
        <ExpandView onClick={changeMain}> 🔍 </ExpandView>
      </Expanded>
    </Main>
  );
}

const Main = styled.div`
  display: grid;
  grid-template-columns: 20% 20px 1fr 20px 10px;
  grid-template-rows: .75fr 5% 1fr;
  grid-column: 3 / ${props => props.columnEnd};
  grid-row: 2 / 11;
  padding: 0.25rem;
  z-index: 100;
  `;

const Expanded = styled.div`
  display: grid;
  grid-template-columns: 1fr 10% 5%;
  grid-template-rows: 10% 10% 1fr;
  grid-column:  3;
  grid-row:  1;
`;

const ExpandView = styled.button`
grid-column:  2;
grid-row:  2;
background: none;
border: none;
`;

const PhotoMain = styled.img`
  height: 100%;
  width: 100%;  
  object-fit: cover;
  grid-column: 1 / 6;
  grid-row: 1 / 4;
  border: solid;
  border-width: thin;
`;

const ArrowRight = styled.button`
  border: solid black;
  border-width: 0 1px 1px 0;
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
  border-width: 0 1px 1px 0;
  display: inline-block;
  padding: 7px;
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
  grid-column: 2;
  grid-row: 2;
  background: #FFE69A;
`;

export default MainBox;
