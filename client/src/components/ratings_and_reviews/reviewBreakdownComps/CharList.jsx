import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import CharBar from './CharBar.jsx';

function CharList({ chars }) {
  const charAdjs = {
    Comfort: ['Uncomfort- able', 'Ok', 'Perfect'],
    Fit: ['Runs Tight', 'Perfect', 'Runs Long'],
    Length: ['Runs Short', 'Perfect', 'Runs Long'],
    Quality: ['Poor', 'What I Expected', 'Perfect'],
    Size: ['A Size Too Small', 'Perfect', 'A Size Too Big'],
    Width: ['Too Narrow', 'Perfect', 'Too Wide'],
  };

  useEffect(() => {}, [chars]);

  return (
    <div>
      {chars ?
      Object.keys(chars).map((char) => (
        <CharBar char={char} charValue={chars[char]} key={chars[char].id} adjs={charAdjs[char]} />
      )) : <span></span>
    }
    </div>
  );
}

CharList.propTypes = {
  chars: PropTypes.object,
}

export default CharList;