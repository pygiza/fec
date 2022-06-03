import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
// report button
const Repor = styled.button`
  border: none;
  background-color: #FF6865;
  font-size: 10px;
  border-radius: 20px;
  text-decoration: underline;
  &:hover {
    color: yellow;
  }
`;
var handleClick = (id, what, final) => {
  axios({
    url: `/qa/${what}/${id}/report`,
    method: 'put'
  })
    .then (() => {
      final();
    });
}
var Report = (props) => (
  <Repor onClick={function() { handleClick(props.id, props.what, props.setData)}}>Report</Repor>
);

export default Report;