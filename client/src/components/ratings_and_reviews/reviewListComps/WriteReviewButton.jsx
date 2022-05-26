import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import WriteReviewForm from './WriteReviewForm.jsx';

function WriteReviewButton({ toggleWriteReview, displayWrite }) {
  return (
    <span>
      <StyledWriteReviewButton onClick={toggleWriteReview}>Write Review</StyledWriteReviewButton>
      <StyledWriteReviewModal displayWrite={displayWrite} onClick={toggleWriteReview}>
        <XOut>
          <i onClick={toggleWriteReview} className="fa-solid fa-circle-xmark" />
        </XOut>
        <ModalContent >
          <WriteReviewForm />
        </ModalContent>
      </StyledWriteReviewModal>
    </span>
  );
}

WriteReviewButton.propTypes = {
  toggleWriteReview: PropTypes.func.isRequired,
  displayWrite: PropTypes.bool.isRequired,
};

const StyledWriteReviewButton = styled.button`
  padding: 1%;
  background-color: white;
  border: 2px black solid;
  font-weight: bold;
  &:hover {
    cursor: pointer;
    background-color: #FFE69A;
  }
`;

const StyledWriteReviewModal = styled.div`
  display: ${props => {
    if (props.displayWrite) {
      return 'block';
    }
    return 'none';
  }};
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.3)
`;

const ModalContent = styled.div`
  background-color: #fefefe;
  margin: 15% 10%;
  border: 3px solid #FFD24C;
  width: 80%;
`;

const XOut = styled.div`
  float: right;
  margin: 14% 9%;
  &:hover {
    cursor: pointer;
  }
`;

export default WriteReviewButton;