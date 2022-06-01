import React, { useState } from 'react';

const ExampleComponent = function(props) {

  let [text, setText] = useState('some text');

  let updateText = function() {
    setText('some more text');
  }

  let asyncUpdateText = function() {
    setTimeout(() => {
      setText('some even more text');
    }, 1000)
  }

  return(
    <>
      <p data-testid='text'>{text}</p>
      <button data-testid='button' onClick={updateText} />
      <button data-testid='async-button' onClick={asyncUpdateText} />
    </>
  )
}

export default ExampleComponent;