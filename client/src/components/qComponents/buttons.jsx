import React from 'react';
import styled from 'styled-components';
import Add from './uniComponents/add.jsx';
import Report from './answerCompontnts/aReport.jsx'

const Help = styled.div`
  grid-area: help;
`;
const Button = styled.button`
  border: none;
  background-color: inherit;
  font-size: 16px;
  cursor: pointer;
  display: inline-block;
  text-decoration: underline;
  &:hover {
    color: orange;
  }
`;

const Helpful = (props) => {
  if (props.isClicked) {
    return (
      <div className={props.className}>
      <span>Helpful? </span>
      <span>yes</span>
      <span> {'(' + props.count + ')'} </span>
    </div>
    );
  }
  return (
    <div className={props.className}>
      <span>Helpful? </span>
      <Button onClick={function() { props.whenClicked();} } >yes</Button>
      <span> {'(' + props.count + ')'} </span>
    </div>
  );
};

 export {Helpful};
