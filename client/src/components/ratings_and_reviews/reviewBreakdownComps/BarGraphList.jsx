import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import BarGraph from './BarGraph.jsx';

function BarGraphList({ ratings, count }) {
  const initialState = {
    "1": null,
    "2": null,
    "3": null,
    "4": null,
    "5": null,
  };
  const [percentages, setPercentages] = useState(initialState);

  useEffect(() => {
    const newState = {}
    for(let key in ratings) {
      newState[key] = parseInt(ratings[key])/count;
    }
    setPercentages(newState);
  }, [ratings, count]);

  return(
    <BarGraphContainer>
      <BarGraph star="5" percent={percentages["5"]}/>
      <BarGraph star="4" percent={percentages["4"]}/>
      <BarGraph star="3" percent={percentages["3"]}/>
      <BarGraph star="2" percent={percentages["2"]}/>
      <BarGraph star="1" percent={percentages["1"]}/>
    </BarGraphContainer>
  );
}

BarGraphList.propTypes = {
  ratings: PropTypes.object,
  count: PropTypes.number,
}

const BarGraphContainer = styled.div`
  margin-bottom: 10%;
`;

export default BarGraphList;

