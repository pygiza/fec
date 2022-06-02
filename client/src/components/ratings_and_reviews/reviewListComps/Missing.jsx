import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function Missing({ formData }) {
  return(
    <MissingDiv>
      Missing:
      <ul>
        {Object.keys(formData).map((key) => {
          if (!formData(key)) {
            return <li>Missing {key}</li>
          }
        })}
      </ul>
    </MissingDiv>
  )
}

Missing.propTypes = {
  formData: PropTypes.object.isRequired,
}

const MissingDiv = styled.div`
  border: 2px red solid;
  text-align: center;
`;

export default Missing;