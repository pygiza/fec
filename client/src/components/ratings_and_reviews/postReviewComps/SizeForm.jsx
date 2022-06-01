import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const middleButtons = ['halfSizeTooSmall', 'perfect5', 'halfSizeTooBig']

function SizeForm ({ onChange }) {

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
      <p>Size:</p>
      <GridContainer>
        <StyledArray>
          <input type="radio" id="aSizeTooSmall" name="125044" value={1} onChange={onCharChange} /> <br />
          <label htmlFor="aSizeTooSmall" id="aSizeTooSmallLabel">A Size Too Small</label>
        </StyledArray>
        <StyledArray>
          <input type="radio" id="halfSizeTooSmall" name="125044" value={2} onChange={onCharChange}/> <br />
          <ToggleLabel htmlFor="halfSizeTooSmall" id="halfSizeTooSmallLabel">1/2 A Size Too Small</ToggleLabel>
        </StyledArray>
        <StyledArray>
          <input type="radio" id="perfect5" name="125044" value={3} onChange={onCharChange}/> <br />
          <ToggleLabel htmlFor="perfect5" id="perfect5Label">Perfect</ToggleLabel>
        </StyledArray>
        <StyledArray>
          <input type="radio" id="halfSizeTooBig" name="125044" value={4} onChange={onCharChange}/> <br />
          <ToggleLabel htmlFor="halfSizeTooBig" id="halfSizeTooBigLabel">1/2 A Size Too Big</ToggleLabel>
        </StyledArray>
        <StyledArray>
          <input type="radio" id="aSizeTooBig" name="125044" value={5} onChange={onCharChange} required={true}/> <br />
          <label htmlFor="aSizeTooBig" id="aSizeTooBigLabel">A Size Too Big</label>
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

export default SizeForm;