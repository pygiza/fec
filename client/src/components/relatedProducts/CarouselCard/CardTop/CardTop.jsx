import React from 'react';
import styled from 'styled-components';
import CardButton from './CardButton.jsx';

const Top = styled.div`
  display: flex;
  justify-content: center;
  height: 60%;
  position: relative;
  -webkit-mask-image: -webkit-gradient(linear, left 20%, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)));
  mask-image: -webkit-gradient(linear, left 20%, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)));
`

const Thumbnail = styled.img`
  border-radius: 2%;
  object-fit: cover;
  min-height: 100%;
  height: auto;
  width: 100%;
`

const CardTop = function({ id, image, name, features, relatedButtonHandler, outfitButtonHandler }) {
  return (
    <Top>
      <CardButton name={name} features={features} onClick={relatedButtonHandler ? (e) => relatedButtonHandler(e, name, features) : (e) => outfitButtonHandler(e, id)} />
      {image == null ?
        <div style={{'backgroundColor': 'grey', 'height': '100%', 'width': '100%'}}></div> :
        <Thumbnail src={image}></Thumbnail>
      }
    </Top>
  )
}

export default CardTop;