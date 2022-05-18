import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Header from '/client/src/Header.jsx';

const Title = styled(Header)`
  font-size: 1.5em;
  text-align: center;
  color: red;
`;

const Wrapper = styled.section`
  padding: 10px;
  background: pink;
`;

class App extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <Wrapper>
        <Title text={'Hello World, We are coming for you!'}/>
      </Wrapper>
    );
  }
}
ReactDOM.render(
    <App />, document.getElementById('root')
);