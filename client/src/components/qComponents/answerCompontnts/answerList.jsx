import React from 'react';
import Report from './aReport.jsx';
import Answer from './answer.jsx'
// make and add answers list to individul questions
var Answers = (props) => {
  var arr = [];
  for (let key in props.awn) {
    arr.push(props.awn[key]);
  }
  console.log(arr)
  return (
    <div>
      {arr.map((answer) => (
        <Answer answer={answer}/>
      ))}
    </div>
  );
}

export default Answers;