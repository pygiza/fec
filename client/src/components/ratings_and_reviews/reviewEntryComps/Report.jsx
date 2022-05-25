import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function Report({ reported, clickReport }) {
  return (
    <span>
      {reported ? <StyledReported>Reported</StyledReported> : <ReportContainer role="button" onClick={clickReport}>Report</ReportContainer>}
    </span>
  );
}

Report.propTypes = {
  reported: PropTypes.bool.isRequired,
  clickReport: PropTypes.func.isRequired,
};

const ReportContainer = styled.span`
  text-decoration: underline;
  margin: 1%;
  &:hover {
    cursor: pointer;
  }
`;

const StyledReported = styled.span`
  margin: 1%;
`;

export default Report;
