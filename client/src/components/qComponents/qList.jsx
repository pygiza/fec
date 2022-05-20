import React from 'react';
import Ind from '/client/src/components/qComponents/qInd.jsx';
// container for a list of individuel questions and answers
var List = (props) => (
  <div>
    {props.data.map((que) => (
      <Ind que={que}/>
    ))}
    {/* <Ind /> */}
  </div>
);

export default List;