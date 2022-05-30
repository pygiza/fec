import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import StarFilterTags from './StarFilterTags.jsx';

function ReviewFilter({ metaData, onSortChange, currentFilters }) {
  const revLength = parseInt(metaData.recommended.true) + parseInt(metaData.recommended.false);

  useEffect(() => {
    document.getElementById('filter').value = 'relevant';
  }, [metaData])

  return (
    <div>
      <FilterContainer>
        <span>{revLength} reviews sorted by </span>
        <FilterMenu name="filter" id="filter" defaultValue="relevant" onChange={onSortChange}>
          <option value="relevant">relevance</option>
          <option value="newest">newest</option>
          <option value="helpful">helpful</option>
        </FilterMenu>
      </FilterContainer>
      <div>
        <StarFilterTags currentFilters={currentFilters}/>
      </div>
    </div>
  );
}

ReviewFilter.propTypes = {
  metaData: PropTypes.object,
  onSortChange: PropTypes.func.isRequired,
  currentFilters: PropTypes.array.isRequired,
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