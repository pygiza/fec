import React from 'react';
import Ind from './qInd.jsx';
// container for a list of individuel questions and answers
var List = (props) => (
  <div className={props.className}>
    {props.data.map((que) => (
      <Ind key={que.question_id} setData={props.setData} relo={props.relo} que={que}/>
    ))}
    {/* <Ind /> */}
  </div>
);

export default List;