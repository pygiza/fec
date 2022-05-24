import React, { useState } from 'react';
import Search from './qSearch.jsx';
import List from './qList.jsx';
import GetData from '/client/src/components/qComponents/Data.jsx'
import styled from 'styled-components'

const Wrap = styled.div`
  display: grid;
  color: white;
  grid-template-rows: 75px 50px 400px;
grid-template-areas:
    "title title title"
    "nav nav nav "
    "con con con";
text-align: center;
`;
const Title = styled.h1`
  font-size: 30px;
  margin-left: 20px
`;
const TitleWrap = styled.div`
  background: #3a3a55;
  grid-area: title;
  text-align: justify;
`;
const NavBar = styled(Search)`
  grid-area: nav;
  background: #3a3a55;
  text-align: right;

`;
const ListCon = styled(List)`
  grid-area: con;
  color: black;
  text-align: justify;
  overflow: scroll;
`
class Question extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      data: []
    }

    this.setData()
  }
  setData () {
    GetData({id: 37311})
    .then(res => {
      console.log(res.data.results);
      this.setState( { data: res.data.results } );
    })
    .catch(err => {
      console.log(err);
    });
  }

  render () {
    return (
          <Wrap>
            <TitleWrap>
              <Title>{'Q & A'}</Title>
            </TitleWrap>
            <NavBar />
            <ListCon data={this.state.data} setData={this.setData.bind(this)} />
          </Wrap>
        );
  }
}

export default Question;
