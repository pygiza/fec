import React, { useState } from 'react';
import styled from 'styled-components';
import { Helpful } from '../buttons.jsx';
import moment from 'moment';
import axios from 'axios';
import Report from './aReport.jsx';
const Img = styled.img`
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
  width: 150px;
  height: 150px;
`;
var whenClicked = (id, update) => {
  axios({
    url: `/qa/answers/${id}/helpful`,
    method: 'put'
  })
    .then(() => {
      update();
    });
}
var Answer = (props) => {
  const [clicked, setClicked] = useState(false);
  return (
    <div>
      <h3>{'A: ' + props.answer.body}</h3>
      <div>
        {props.answer.photos.map((img) => (
          <Img src={img}/>
        ))}
      </div>
      <h5>{'By ' + props.answer.answerer_name + ', On ' +
        moment(props.answer.date).format('MMMM Do YYYY')}
        <Helpful isClicked={clicked}
          whenClicked={function() { whenClicked(props.answer.id, function() { setClicked(true); props.setData();}); }}
          count={props.answer.helpfulness}/> <Report id={props.answer.id} what={'answers'} setData={props.setData}/></h5>
    </div>
  );
};

export default Answer;