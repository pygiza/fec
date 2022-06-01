import React, { useState } from 'react';

const ExampleComponent = function(props) {

  let [text, setText] = useState('some text');

  return(
    <>
      <p data-testid='text'>{text}</p>
    </>
  )
}

export default ExampleComponent;