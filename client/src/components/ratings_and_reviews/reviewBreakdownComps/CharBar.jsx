import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function CharBar({ char, adjs, charValue }) {
  const charPercent = Math.round((parseFloat(charValue.value)/5)* 100);

  return(
    <OverallCharBar>
      <Label0>{char}</Label0>
      <WrapperDiv>
        <Triangle charPercent={charPercent} />
        <BarDiv>
          <BaseBar></BaseBar>
          <BaseBar></BaseBar>
          <BaseBar></BaseBar>
          <Label1>{adjs[0]}</Label1>
          <Label2>{adjs[1]}</Label2>
          <Label3>{adjs[2]}</Label3>
        </BarDiv>
      </WrapperDiv>

    </OverallCharBar>
  );
}

CharBar.propTypes = {
  char: PropTypes.string.isRequired,
  adjs: PropTypes.array.isRequired,
  charValue: PropTypes.object.isRequired,
};

const OverallCharBar = styled.div`
  margin-left: 8%;
`;

const BarDiv = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 33% 33% 33%;
`;

const WrapperDiv = styled.div`
  width: 90%;
`;

const BaseBar = styled.div`
  width: 100%;
  height: 1rem;
  border: 2px #92B4EC solid;
  background-color: #F7F7F7;
`;

const Label0 = styled.p`
  font-size: .9em;
  font-weight: bold;
  margin: 0;
`;

const Label1 = styled.p`
  font-size: .80em;
`;

const Label2 = styled.p`
  font-size: .80em;
  text-align: center;
`;

const Label3 = styled.p`
  font-size: .80em;
  text-align: right;
`;

const Triangle = styled.div`
  width: 0;
  height: 0;
  border-left: .8em solid transparent;
  border-right: .8em solid transparent;
  border-top: .8em solid black;
  margin-left: ${(props) => props.charPercent}%;
  margin-bottom: -3%;
  position relative;
  z-index: 1;
`;

export default CharBar;