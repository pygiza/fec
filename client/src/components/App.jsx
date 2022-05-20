import React from 'react';
import styled from 'styled-components';
import Overview from './overview/Overview.jsx';
import Question from './qComponents/questions.jsx'
var App = function (props) {
  return (
    <div>
      <h1>Hello World, we're coming for you!</h1>
      <Overview />
      <Question />
    </div>
  );
}

export default App;
