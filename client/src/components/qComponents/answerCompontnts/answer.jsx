import React from 'react';
import styled from 'styled-components';
const Awn = styled.h3`
  margin-left: 5%;
  grid-area: awns;
`;
var Answer = (props) => (
  <div>
    <Awn>{'A: ' + props.answer.body}</Awn>
  </div>
);

export default Answer;