import React from 'react';
import styled from 'styled-components'

// search bar
const Bar = styled.input`
  font-size: 20px;
  margin-right: 20px;
  width: 75%
`
var Search = (props) => (
  <div className={props.className}>
    <Bar type="text" placeholder="Have a question? Search for answers..."></Bar>
  </div>
);

export default Search;