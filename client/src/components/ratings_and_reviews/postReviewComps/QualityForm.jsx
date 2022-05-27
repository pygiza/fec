import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const middleButtons = ['belowAverage', 'whatIExpected', 'prettyGreat']

function QualityForm () {

  function showTitle(e) {
    const elementLabel = document.getElementById(e.target.id + 'Label');
    elementLabel.style.display = 'block';

    middleButtons.forEach((midButton) => {
      if (e.target.id !== midButton) {
        document.getElementById(midButton + 'Label').style.display = 'none';
      }
    });
  }

  return (
    <div>
      <p>Quality:</p>
      <GridContainer>
        <StyledArray>
          <input type="radio" id="poor" name="quality" value={1} onChange={showTitle} /> <br />
          <label htmlFor="poor" id="poorLabel">Poor</label>
        </StyledArray>
        <StyledArray>
          <input type="radio" id="belowAverage" name="quality" value={2} onChange={showTitle}/> <br />
          <ToggleLabel htmlFor="belowAverage" id="belowAverageLabel">Below Average</ToggleLabel>
        </StyledArray>
        <StyledArray>
          <input type="radio" id="whatIExpected" name="quality" value={3} onChange={showTitle}/> <br />
          <ToggleLabel htmlFor="whatIExpected" id="whatIExpectedLabel">What I Expected</ToggleLabel>
        </StyledArray>
        <StyledArray>
          <input type="radio" id="prettyGreat" name="quality" value={4} onChange={showTitle}/> <br />
          <ToggleLabel htmlFor="prettyGreat" id="prettyGreatLabel">Pretty Great</ToggleLabel>
        </StyledArray>
        <StyledArray>
          <input type="radio" id="perfect4" name="quality" value={5} onChange={showTitle}/> <br />
          <label htmlFor="perfect4" id="perfect4Label">Perfect</label>
        </StyledArray>
      </GridContainer>
    </div>
  );
}

const StyledArray = styled.div`
  float: left;
  padding: 0 1%;
  text-align: center;
`;

const ToggleLabel = styled.label`
  display: none;
`;

const GridContainer = styled.div`
  display: grid;
  gap: 5%;
  grid-template-columns: 15% 15% 15% 15% 15%;
  text-align: center;
`;

export default QualityForm;