import React from 'react';

var Answer = (props) => (
  <div>
    {console.log(props)}
    <span>{'A: ' + props.answer.body}</span>
  </div>
);

export default Answer;