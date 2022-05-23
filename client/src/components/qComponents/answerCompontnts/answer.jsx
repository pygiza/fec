import React from 'react';
import styled from 'styled-components';
import Buttons from '../buttons.jsx'
import moment from 'moment';
var Answer = (props) => (
  <div>
    <h3>{'A: ' + props.answer.body}</h3>
    <h5>{'By ' + props.answer.answerer_name + ', On ' +
      moment(props.answer.date).format('MMMM Do YYYY')}  <Buttons name={'Report'} count={props.answer.helpfulness}/></h5>

  </div>
);

export default Answer;