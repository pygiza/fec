import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: red;
`;

const Wrapper = styled.section`
  padding: 10px;
  background: pink;
`;

var Header = () => (
  <Wrapper>
    <Title>
      Hello World, We are coming for you!
    </Title>
  </Wrapper>
)
class App extends React.Component {


  render () {
    return (
      <Header />
    );
  }
}
ReactDOM.render(
    <App />, document.getElementById('root')
);