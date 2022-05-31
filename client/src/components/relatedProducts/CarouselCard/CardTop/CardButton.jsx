import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Icon = styled.button`
  position: absolute;
  top: 5%;
  right: 5%;
  background-color: light-grey;
  font-size: 16px;
  height: 30px;
  width: 30px;
  text-align: center;
`

const CarouselButton = function({ name, features, onClick }) {
  return (
    <>
      {
        name ?
          <Icon className="fa-solid fa-table-columns" id='cardButton' onClick={onClick} /> :
          <Icon className="fa-solid fa-trash" id='cardButton' onClick={onClick} />
      }
    </>
  )
}

export default CarouselButton