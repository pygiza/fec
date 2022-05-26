import React, { useState } from 'react';
import styled from 'styled-components';
import ThumbnailBox from './ThumbnailBox.jsx';

function MainBox({ image, handleClick, images, currentImageIndex, updateLocation, firstThumbnail, lastThumbnail }) {

  return (
    <Main>
      <PhotoMain src={image ? image.thumbnail_url : 'Waiting for Images'} />
      <ThumbnailBox images={images()} updateLocation={updateLocation} currentImageIndex={currentImageIndex}/>
      <ArrowRight value="right" onClick={handleClick} />
      <ArrowLeft value="left" onClick={handleClick} />
    </Main>
  );
}

const Main = styled.div`
  display: grid;
  grid-template-columns: 20% 20px 1fr 20px;
  grid-template-rows: .75fr 5% 1fr;
  grid-column: 3 / 8;
  grid-row: 2 / 11;
  padding: 0.25rem;
  `;

const PhotoMain = styled.img`
  height: 100%;
  width: 100%;  
  object-fit: cover;
  grid-column: 1 / 5;
  grid-row: 1 / 4;
  border: solid;
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
