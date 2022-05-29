import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function CharBar({ char, adjs, charValue }) {
  const charPercent = Math.round((parseFloat(charValue.value)/5)* 100);

  return(
    <OverallCharBar>
      <Label1>{char}</Label1>
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
`;

const Label1 = styled.p`
  font-size: 1.5vw;
`;

const Label2 = styled.p`
  font-size: 1.5vw;
  text-align: center;
`;

const Label3 = styled.p`
  font-size: 1.5vw;
  text-align: right;
`;

const Triangle = styled.div`
  width: 0;
  height: 0;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-top: 15px solid black;
  margin-left: ${(props) => props.charPercent}%;
  margin-bottom: -3%;
  position relative;
  z-index: 1;
`;

export default CharBar;