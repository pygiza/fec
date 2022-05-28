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
`;

const StarContainer = styled.div`
  display: grid;
  grid-template-columns: 18% auto auto;
`;

const BarContainer = styled.div`
  margin-top: 12%;
`;

const DarkBar = styled.div`
  position: absolute;
  width: ${props => (
    props.percent * 20
  )}%;
  height: 1rem;
  background-color: #92B4EC;
  border: 1px solid #92B4EC;
`;

const LightBar = styled.div`
  position: absolute;
  width: 20%;
  height: 1rem;
  background-color: #F7F7F7;
  border: 1px solid #92B4EC;
`;

const StarLabel = styled.p`
  text-decoration: underline;
  &:hover{
    cursor: pointer;
  }
`;

export default BarGraph;