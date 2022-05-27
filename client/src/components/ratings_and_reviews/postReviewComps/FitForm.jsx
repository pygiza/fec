import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const middleButtons = ['runsSlightlyTight', 'perfect2', 'runsSlightlyLong']

function FitForm () {

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
      <p>Fit:</p>
      <GridContainer>
        <StyledArray>
          <input type="radio" id="runsTight" name="fit" value={1} onChange={showTitle} /> <br />
          <label htmlFor="runsTight" id="runsTightLabel">Runs Tight</label>
        </StyledArray>
        <StyledArray>
          <input type="radio" id="runsSlightlyTight" name="fit" value={2} onChange={showTitle}/> <br />
          <ToggleLabel htmlFor="runsSlightlyTight" id="runsSlightlyTightLabel">Runs Slightly Tight</ToggleLabel>
        </StyledArray>
        <StyledArray>
          <input type="radio" id="perfect2" name="fit" value={3} onChange={showTitle}/> <br />
          <ToggleLabel htmlFor="perfect2" id="perfect2Label">Perfect</ToggleLabel>
        </StyledArray>
        <StyledArray>
          <input type="radio" id="runsSlightlyLong" name="fit" value={4} onChange={showTitle}/> <br />
          <ToggleLabel htmlFor="runsSlightlyLong" id="runsSlightlyLongLabel">Runs Slightly Long</ToggleLabel>
        </StyledArray>
        <StyledArray>
          <input type="radio" id="runsLong" name="fit" value={5} onChange={showTitle}/> <br />
          <label htmlFor="runsLong" id="runsLongLabel">Runs Long</label>
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

export default FitForm;
