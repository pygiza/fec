import React, { useState } from 'react';
import styled from 'styled-components';
import { Helpful } from '../buttons.jsx';
import moment from 'moment';
import axios from 'axios';
import Report from './aReport.jsx';
var whenClicked = (id, update) => {
  axios({
    url: `http://localhost:3000/qa/answers/${id}/helpful`,
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
      <h5>{'By ' + props.answer.answerer_name + ', On ' +
        moment(props.answer.date).format('MMMM Do YYYY')}
        <Helpful isClicked={clicked}
          whenClicked={function() { whenClicked(props.answer.id, function() { setClicked(true); props.setData();}); }}
          count={props.answer.helpfulness}/> <Report id={props.answer.id} what={'answers'} setData={props.setData}/></h5>
    </div>
  );
};

export default Answer;