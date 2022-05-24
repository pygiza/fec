import React from 'react';
import Answer from './answer.jsx';
import styled from 'styled-components';
// make and add answers list to individul questions
const Awn = styled.h3`
  margin-left: 5%;
  grid-area: awns;
`;
var Answers = (props) => {
  var arr = [];
  for (let key in props.awn) {
    arr.push(props.awn[key]);
  }

  return (
    <Awn>
      {arr.map((answer) => (
        <Answer key={answer.id} setData={props.setData} answer={answer}/>
      ))}
    </Awn>
  );
}

export default Answers;