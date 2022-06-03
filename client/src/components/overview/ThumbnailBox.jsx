import React from 'react';
import styled from 'styled-components';

function ThumbnailBox({ images, updateLocation, currentImageIndex }) {
  let row = 1;
  let column = 2;
  let borderColor = '';

  return (
    <ThumbnailContainer>
      <TopArrowContainer>
        <ArrowTop value="top" onClick={updateLocation}/>
      </TopArrowContainer>
      {images ? images.map((image, index) => {
        if (index === currentImageIndex) {
          borderColor = 'red';
        } else {
          borderColor = 'black'
        }
        row += 1;
        return(<EachStyle
          key={index}
          src={image.thumbnail_url}
          row={row}
          column={column}
          border={borderColor}
          />);
      }) : 'Still Waiting!'}
      <BottomArrowContainer>
        <ArrowBottom value="bottom" onClick={updateLocation}/>
      </BottomArrowContainer>
    </ThumbnailContainer>
  );
}

const ThumbnailContainer = styled.div`
  display: grid;
  grid-template-columns: 20% 60% 20%;
  grid-template-rows: 10% repeat(5, minmax(0,1fr)) 10%;
  grid-column-gap: .5em;
  grid-column: 1;
  grid-row: 1 / 4;
  grid-row-gap: 1.5em;
  `;

const ArrowTop = styled.button`
  border: solid black;
  border-width: 0 1px 1px 0;
  transform: rotate(-135deg);
  -webkit-transform: rotate(-135deg);
  height: 40%;
  width: 60%;
  object-fit: contain;
  background: #FFE69A;
  grid-column: 2;
  grid-row: 2;
  &:hover {
    cursor: pointer;
  }
`;

const TopArrowContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0,1fr));
  grid-template-rows: repeat(3, minmax(0,1fr));
  grid-column: 2;
  grid-row: 1 / 3;
`;

const ArrowBottom = styled.button`
  border: solid black;
  border-width: 0 1px 1px 0;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  height: 40%;
  width: 60%;
  object-fit: contain;
  background: #FFE69A;
  grid-column: 2;
  grid-row: 3;
  &:hover {
    cursor: pointer;
  }
`;

const BottomArrowContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0,1fr));
  grid-template-rows: repeat(3, minmax(0,1fr));
  grid-column: 2;
  grid-row: 6 / 8;
`;

const EachStyle = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
  border: solid;
  border-width: thin;
  border-color: ${props => props.border};
  padding-top: .25em;
  padding-bottom: .25em;
  background: white;
  grid-column: ${props => props.column};
  grid-row: ${props => props.row};
`;

export default ThumbnailBox;