import React from 'react';
import Answers from './answerCompontnts/answerList.jsx';
// make indevituel questions and add/ store there answers
var Ind = (props) => (
  <div>
    <div>
      <span>{'Q: ' + props.que.question_body}</span>
    </div>
    <Answers awn={props.que.answers}/>
  </div>
);

export default Ind;