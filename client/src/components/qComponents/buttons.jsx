import React from 'react';
import styled from 'styled-components';

const Help = styled.div`
  grid-area: help;
`;
const Add = styled.div
const Buttons = (props) => (
  <div className={props.className}>
    <span>Helpful? </span>
    <button>yes</button>
    <span> {'(' + props.count + ')'} </span>
    <span> | </span>
    <button>{props.name}</button>
  </div>
);

export default Buttons;