import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const middleButtons = ['slightlyUncomfortable', 'ok', 'comfortable']

function ComfortForm ({onChange}) {

  function showTitle(e) {
    const elementLabel = document.getElementById(e.target.id + 'Label');
    elementLabel.style.display = 'block';

    middleButtons.forEach((midButton) => {
      if (e.target.id !== midButton) {
        document.getElementById(midButton + 'Label').style.display = 'none';
      }
    });
  }

  function onCharChange(e) {
    showTitle(e);
    onChange(e, true);
  }

  return (
    <div>
      <p>Comfort:</p>
      <GridContainer>
        <StyledArray>
          <input type="radio" id="uncomfortable" name="125033" value={1} onChange={onCharChange}/> <br />
          <label htmlFor="uncomfortable" id="uncomfortableLabel">Uncomfortable</label>
        </StyledArray>
        <StyledArray>
          <input type="radio" id="slightlyUncomfortable" name="125033" value={2} onChange={onCharChange}/> <br />
          <ToggleLabel htmlFor="slightlyUncomfortable" id="slightlyUncomfortableLabel">Slightly Uncomfortable</ToggleLabel>
        </StyledArray>
        <StyledArray>
          <input type="radio" id="ok" name="125033" value={3} onChange={onCharChange}/> <br />
          <ToggleLabel htmlFor="ok" id="okLabel">Ok</ToggleLabel>
        </StyledArray>
        <StyledArray>
          <input type="radio" id="comfortable" name="125033" value={4} onChange={onCharChange}/> <br />
          <ToggleLabel htmlFor="comfortable" id="comfortableLabel">Comfortable</ToggleLabel>
        </StyledArray>
        <StyledArray>
          <input type="radio" id="perfect" name="125033" value={5} onChange={onCharChange} required={true}/> <br />
          <label htmlFor="perfect" id="perfectLabel">Perfect</label>
        </StyledArray>
      </GridContainer>
    </div>
  );
}


const StyledArray = styled.div`
  float: left;
  padding: 0 1%;
  text-align: center;
  &:hover {
    background-color: #92B4EC;
  }
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

export default ComfortForm;

