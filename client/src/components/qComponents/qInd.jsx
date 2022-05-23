import React from 'react';
import Answers from './answerCompontnts/answerList.jsx';
import styled from 'styled-components'
import Buttons from './buttons.jsx'
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
  tex-align: right;
`;
const Button = styled(Buttons)`
  grid-area: button;
  margin-top: 2.5%;
`;
const Qw = styled.div`
  grid-area: qw;
  width: 50%;
`;

var Ind = (props) => (
  <Wraper>
      <Ques>
        <Qw>
          <h2>{'Q: ' + props.que.question_body}</h2>
        </Qw>
        <Button />
      </Ques>
      <Answers awn={props.que.answers}/>
  </Wraper>
);

export default Ind;