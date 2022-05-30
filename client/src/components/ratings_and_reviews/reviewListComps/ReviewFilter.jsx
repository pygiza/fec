import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function ReviewFilter({ metaData, onSortChange }) {
  const revLength = parseInt(metaData.recommended.true) + parseInt(metaData.recommended.false);

  useEffect(() => {
    document.getElementById('filter').value = 'relevant';
  }, [metaData])

  return (
    <FilterContainer>
      <span>{revLength} reviews sorted by </span>
      <FilterMenu name="filter" id="filter" defaultValue="relevant" onChange={onSortChange}>
        <option value="relevant">relevance</option>
        <option value="newest">newest</option>
        <option value="helpful">helpful</option>
      </FilterMenu>
    </FilterContainer>
  );
}

ReviewFilter.propTypes = {
  metaData: PropTypes.object,
  onSortChange: PropTypes.func.isRequired,
};

const FilterMenu = styled.select`
  border: none;
  text-decoration: underline;
  &:hover {
    cursor: pointer;
  }
  background-color: white;
  font-size: 1rem;
  font-weight: bold;
`;

const FilterContainer = styled.div`
  font-weight: bold;
  font-size: 1.2rem;
  background-color: white;
  padding: 1%;
  border-bottom: #FFD24C solid 2px;
  width: max-content;
  background-color: white;
`;

const OptGroup = styled.optgroup`
  background-color: white;
`;

export default ReviewFilter;