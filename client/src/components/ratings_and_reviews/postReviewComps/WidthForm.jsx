import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const middleButtons = ['slightlyNarrow', 'perfect6', 'slightlyWide']

function WidthForm ({ onChange }) {

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
      <p>Width:</p>
      <GridContainer>
        <StyledArray>
          <input type="radio" id="tooNarrow" name="125045" value={1} onChange={onCharChange} /> <br />
          <label htmlFor="tooNarrow" id="tooNarrowLabel">Too Narrow</label>
        </StyledArray>
        <StyledArray>
          <input type="radio" id="slightlyNarrow" name="125045" value={2} onChange={onCharChange}/> <br />
          <ToggleLabel htmlFor="slightlyNarrow" id="slightlyNarrowLabel">Slightly Narrow</ToggleLabel>
        </StyledArray>
        <StyledArray>
          <input type="radio" id="perfect6" name="125045" value={3} onChange={onCharChange}/> <br />
          <ToggleLabel htmlFor="perfect6" id="perfect6Label">Perfect</ToggleLabel>
        </StyledArray>
        <StyledArray>
          <input type="radio" id="slightlyWide" name="125045" value={4} onChange={onCharChange}/> <br />
          <ToggleLabel htmlFor="slightlyWide" id="slightlyWideLabel">Slightly Wide</ToggleLabel>
        </StyledArray>
        <StyledArray>
          <input type="radio" id="tooWide" name="125045" value={5} onChange={onCharChange}/> <br />
          <label htmlFor="tooWide" id="tooWideLabel">Too Wide</label>
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

export default WidthForm;
