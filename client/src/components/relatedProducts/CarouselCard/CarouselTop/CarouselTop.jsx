import React from 'react';
import styled from 'styled-components';

const Top = styled.div`
  display: flex;
  justify-content: center;
  height: 60%;
  -webkit-mask-image: -webkit-gradient(linear, left 20%, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)));
  mask-image: -webkit-gradient(linear, left 20%, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)));
`
const Thumbnail = styled.img`
object-fit: cover;
min-height: 100%;
height: auto;
width: 100%;
`

const CarouselTop = function({ image, characteristics }) {
  return (
    <Top>
      <Thumbnail src={image}></Thumbnail>
    </Top>
  )
}

export default CarouselTop;