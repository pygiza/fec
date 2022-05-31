import React, { useState } from 'react';
import Answer from './answer.jsx';
import styled from 'styled-components';
import Load from '../uniComponents/loadMore.jsx'
// make and add answers list to individul questions
const Awn = styled.h3`
  margin-left: 5%;
  grid-area: awns;
`;
const NoAns = styled.div`
  display: none;
`;
const Ans = styled(Load)`
  margin-left: 5%;
  background-color: inherit;
  font-size: 16px;
  cursor: pointer;
  display: inline-block;
  &:hover {
    color: orange;
  }
`;
var Answers = (props) => {
  var arr = [];
  for (let key in props.awn) {
    arr.push(props.awn[key]);
  }
  arr.sort(function(a, b){return b.helpfulness - a.helpfulness})
  var two = arr.slice(0, 2)
  var AddAns = (arr.length >= 3) ? Ans: NoAns;
  const [colap, setColap] = useState(false);
  var res = colap ? arr: two;
  return (
    <Awn>
      {res.map((answer) => (
        <Answer key={answer.id} setData={props.setData} answer={answer}/>
      ))}
      <AddAns colap={colap} setColap={setColap} name='answers'/>
    </Awn>
  );
}

export default Answers;