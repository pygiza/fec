import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import CharBar from './CharBar.jsx';

function CharList() {
  return (
    <div>
      <CharBar />
      <CharBar />
    </div>
  );
}

export default CharList;