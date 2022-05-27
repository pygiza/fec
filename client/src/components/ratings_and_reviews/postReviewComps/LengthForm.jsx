import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const middleButtons = ['runsSlightlyShort', 'perfect3', 'runsSlightlyLong2']

function LengthForm () {

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
      <p>Length:</p>
      <GridContainer>
        <StyledArray>
          <input type="radio" id="runsShort" name="length" value={1} onChange={showTitle} /> <br />
          <label htmlFor="runsShort" id="runsShortLabel">Runs Short</label>
        </StyledArray>
        <StyledArray>
          <input type="radio" id="runsSlightlyShort" name="length" value={2} onChange={showTitle}/> <br />
          <ToggleLabel htmlFor="runsSlightlyShort" id="runsSlightlyShortLabel">Runs Slightly Short</ToggleLabel>
        </StyledArray>
        <StyledArray>
          <input type="radio" id="perfect3" name="length" value={3} onChange={showTitle}/> <br />
          <ToggleLabel htmlFor="perfect3" id="perfect3Label">Perfect</ToggleLabel>
        </StyledArray>
        <StyledArray>
          <input type="radio" id="runsSlightlyLong2" name="length" value={4} onChange={showTitle}/> <br />
          <ToggleLabel htmlFor="runsSlightlyLong2" id="runsSlightlyLong2Label">Runs Slightly Long</ToggleLabel>
        </StyledArray>
        <StyledArray>
          <input type="radio" id="runsLong2" name="length" value={5} onChange={showTitle}/> <br />
          <label htmlFor="runsLong2" id="runsLong2Label">Runs Long</label>
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

export default LengthForm;
