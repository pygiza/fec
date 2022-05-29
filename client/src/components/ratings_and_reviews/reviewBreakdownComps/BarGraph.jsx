import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function BarGraph({ star, percent }) {
  return (
    <BarGraphContainer>
      <StarContainer>
        <StarLabel>{star} Star</StarLabel>
        <BarContainer>
          <LightBar />
          <DarkBar percent={percent}/>
        </BarContainer>
      </StarContainer>
    </BarGraphContainer>
  );
}

BarGraph.propTypes = {
  star: PropTypes.string,
  percent: PropTypes.number,
}

const BarGraphContainer = styled.div`
  margin-left: 8%;
  padding-top: 1%;
  position: relative;
`;

const StarContainer = styled.div`
  display: grid;
  grid-template-columns: 18% auto ;
`;

const BarContainer = styled.div`
`;

const DarkBar = styled.div`
  position: absolute;
  bottom: 0;
  width: ${props => (
    props.percent * 60
  )}%;
  height: .9rem;
  background-color: #92B4EC;
  border: 1px solid #92B4EC;
`;

const LightBar = styled.div`
  position: absolute;
  bottom: 0;
  width: 60%;
  height: .9rem;
  background-color: #F7F7F7;
  border: 1px solid #92B4EC;
`;

const StarLabel = styled.p`
  margin-bottom: 0;
  text-decoration: underline;
  font-size: 1em;
  &:hover{
    cursor: pointer;
    color: #F9C321;
  }
`;

export default BarGraph;