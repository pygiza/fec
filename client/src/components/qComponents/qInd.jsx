import React, { useState } from 'react';
import Answers from './answerCompontnts/answerList.jsx';
import styled from 'styled-components'
import { Helpful } from './buttons.jsx'
import Add from './uniComponents/add.jsx';
import axios from 'axios';

// make indevituel questions and add/ store there answers
const Wraper = styled.div`
  margin-left: 5%;
  display: grid;
  grid-template-rows: 50px, 100px;
  grid-template-areas:
    "ques"
    "awns";
`;
const Ques = styled.div`
  grid-area: ques;
  display: grid;
  grid-template-rows: 50px;
  grid-template-areas:
    "qw button";
  text-align: left;
`;
const Button = styled(Helpful)`
  grid-area: button;
  text-align: right;
`;
const Qw = styled.div`
  grid-area: qw;
  width: 100%;
`;
let Ad = styled(Add)`
  border: yellow;
  background-color: inherit;
  float: left;
  font-size: 15px;
  text-decoration: underline;
  &:hover {
    color: orange;
  }
`;
var whenClicked = (id, update) => {
  axios({
    url: `http://localhost:3000/qa/questions/${id}/helpful`,
    method: 'put'
  })
    .then(() => {
      update();
    });
}
var Ind = (props) => {
  const [clicked, setClicked] = useState(false);
 return(
  <Wraper>
      <Ques>
        <Qw>
          <h2>{'Q: ' + props.que.question_body}</h2>
        </Qw>
        <Button isClicked={clicked}
          whenClicked={function() { whenClicked(props.que.question_id, function() { setClicked(true); props.setData();}); }}
          count={props.que.question_helpfulness}/>
        <Ad setData={props.setData} Id={props.que.question_id} value={'Answer'}/>
      </Ques>
      <Answers setData={props.setData} awn={props.que.answers}/>
  </Wraper>
 );
}

export default Ind;