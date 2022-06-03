import React, { useState, useEffect } from 'react';
import Search from './qSearch.jsx';
import List from './qList.jsx';
import GetData from './Data.jsx';
import styled from 'styled-components';
import Load from './uniComponents/loadMore.jsx';
import Add from './uniComponents/add.jsx';

const Wrap = styled.div`
  display: grid;
  color: white;
  grid-template-rows: 75px 50px 600px 75px;
  grid-template-areas:
    "title title title"
    "nav nav nav "
    "con con con"
    "button button button";
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
`;
const Buttons = styled.div`
  grid-area: button;
  width: 100%;
  text-align: left;
`;
const Ans = styled(Load)`
  background-color: inherit;
  font-size: 16px;
  cursor: pointer;
  float: left;
  margin-left: 40px;
  &:hover {
    color: orange;
  }
`;
const AddQ = styled(Add)`
  background-color: inherit;
  font-size: 16px;
  cursor: pointer;
  float: left;
  &:hover {
    color: orange;
  }
`;
function Question(props) {
  const [data, setData] = useState([]);
  const [two, setTwo] = useState([]);
  const [colap, setColap] = useState(false);
  function set() {
    GetData({id: props.productInfo.id})
      .then(res => {
        setData(res.data.results);
        var arr = [];
        arr.push(res.data.results[0]);
        arr.push(res.data.results[1]);
        setTwo(arr)
      })
      .catch(err => {
        console.log(err);
      });
  }
  useEffect(() => {
    set();
  }, [props.productInfo]);
    return (
          <Wrap>
            <TitleWrap>
              <Title>{'Q & A'}</Title>
            </TitleWrap>
            <NavBar />
            <ListCon data={colap ? data: two} setData={set.bind(this)}  />
            <Buttons>
              <Ans colap={colap} setColap={setColap} name={'questions'}/>
              <AddQ setData={set.bind(this)} Id={props.product_id} value={'Question'}/>
            </Buttons>
          </Wrap>
        );
}

export default Question;
