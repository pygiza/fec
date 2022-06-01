import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import WriteReviewForm from './WriteReviewForm.jsx';

function WriteReviewButton({ toggleWriteReview, displayWrite, metaData, productInfo }) {
  return (
    <span>
      <StyledWriteReviewButton onClick={toggleWriteReview}>Write Review +</StyledWriteReviewButton>
      <StyledWriteReviewModal displayWrite={displayWrite} >
        <XOut onClick={toggleWriteReview}>
          <i  className="fa-solid fa-xmark fa-2x"/>
        </XOut>
        <WriteReviewForm metaData={metaData} productInfo={productInfo}/>
      </StyledWriteReviewModal>
    </span>
  );
}

WriteReviewButton.propTypes = {
  toggleWriteReview: PropTypes.func.isRequired,
  displayWrite: PropTypes.bool.isRequired,
  metaData: PropTypes.object.isRequired,
  productInfo: PropTypes.object.isRequired,
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

const XOut = styled.div`
  float: right;
  margin: 14% 5%;
  &:hover {
    cursor: pointer;
    background-color: #FFE69A;
  }
  text-align: center;
  background-color: white;
  border-radius: 50%;
  height: 35px;
  width: 35px;
  border: 2px solid black;
`;

export default WriteReviewButton;