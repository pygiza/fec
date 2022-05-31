import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function Helpful({ votedHelpful, clickHelpful, helpfulness }) {
  return (
    <span>
      Helpful?
      {votedHelpful ? <StyledYes>Yes</StyledYes>
        : <HelpfulContainer  role="button" onClick={clickHelpful}>Yes</HelpfulContainer>}
      (
      {votedHelpful ? helpfulness + 1 : helpfulness}
      )
    </span>
  );
}

Helpful.propTypes = {
  votedHelpful: PropTypes.bool.isRequired,
  clickHelpful: PropTypes.func.isRequired,
  helpfulness: PropTypes.number.isRequired,
};

const HelpfulContainer = styled.span`
  text-decoration: underline;
  margin: 1%;
  &:hover {
    cursor: pointer;
    color: red;
  }
`;

const StyledYes = styled.span`
  margin: 1%;
`;

export default Helpful;
