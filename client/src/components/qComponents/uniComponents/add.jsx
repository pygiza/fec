import React from 'react';
import styled from 'styled-components';
// add a answer/question
const Ad = styled.button`
  border: yellow;
  background-color: inherit;
  float: left;
  font-size: 15px;
  text-decoration: underline;
  &:hover {
    color: orange;
  }
`;
var Add = (props) => (
  <div>
    <Ad>Add answer</Ad>
  </div>
);

export default Add;