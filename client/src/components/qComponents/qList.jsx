import React from 'react';
import Ind from '/client/src/components/qComponents/qInd.jsx';
// container for a list of individuel questions and answers
var List = (props) => (
  <div className={props.className}>
    {props.data.map((que) => (
      <Ind key={que.question_id} setData={props.setData} que={que}/>
    ))}
    {/* <Ind /> */}
  </div>
);

export default List;