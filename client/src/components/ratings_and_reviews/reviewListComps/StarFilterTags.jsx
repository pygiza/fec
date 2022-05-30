import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function StarFilterTags({ currentFilters }) {
  return(
    <StarTagContainer>
      {currentFilters.map((filter) => (
        <StarTag key={filter}>{filter} stars <i className="fa-regular fa-circle-xmark"></i></StarTag>
      ))}
      {currentFilters.length ? <RemoveFilters>Remove Filters</RemoveFilters> : ""}
    </StarTagContainer>
  )
}

StarFilterTags.propTypes = {
  currentFilters: PropTypes.array.isRequired,
}

const StarTag = styled.div`
  background-color: #92B4EC;
  text-align: center;
  &:hover {
    cursor: pointer;
    border: 2px #92B4EC solid;
  }
  margin-right: 2%;
  margin-top: 2%;
  border-radius: 3px;
  padding: 1%;
  padding-bottom: .5%;
  font-weight: bold;
`;

const StarTagContainer = styled.div`
  display: flex;
  padding-bottom: 2%;
`;

const RemoveFilters = styled.div`
  background-color: #92B4EC;
  text-align: center;
  &:hover {
    cursor: pointer;
    border: 2px #92B4EC solid;
  }
  margin-right: 2%;
  margin-top: 2%;
  border-radius: 3px;
  padding: 1%;
  padding-bottom: .5%;
  font-weight: bold;
  margin-left: auto;
`;

export default StarFilterTags;