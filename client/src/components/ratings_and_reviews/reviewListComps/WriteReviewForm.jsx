import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ComfortForm from '../postReviewComps/ComfortForm.jsx';
import FitForm from '../postReviewComps/FitForm.jsx';
import LengthForm from '../postReviewComps/LengthForm.jsx';
import QualityForm from '../postReviewComps/QualityForm.jsx';
import SizeForm from '../postReviewComps/SizeForm.jsx';
import WidthForm from '../postReviewComps/WidthForm.jsx';

function WriteReviewForm({ metaData }) {

  const initialCharacteristics = {
    Comfort: false,
    Fit: false,
    Length: false,
    Quality: false,
    Size: false,
    Width: false,
  };

  const [ { Comfort, Fit, Length, Quality, Size, Width }, setCharacteristics ] = useState(initialCharacteristics);

  useEffect(() => {
    setCharacteristics(initialCharacteristics);
    const newChars = {...initialCharacteristics};
    for(let key in metaData.characteristics) {
      newChars[key] = true;
    }
    setCharacteristics(newChars);
  }, [metaData]);

  return (
    <ModalContent>
      <h3>Write Your Review</h3>
      <h4>About the PRODUCT NAME</h4>
      {/* Overall Rating */}
      <p>Do you recommend this product?</p>
      <input type="radio" name="recommend" value="true" id="yesRec" />
      <label htmlFor="yesRec">Yes</label>
      <input type="radio" name="recommend" value="false" id="noRec" />
      <label htmlFor="noRec">No</label>

      <h4>Characteristics</h4>
      {Comfort ? <ComfortForm /> : ''}
      {Fit ? <FitForm /> : ''}
      {Length ? <LengthForm /> : ''}
      {Quality ? <QualityForm /> : ''}
      {Size ? <SizeForm /> : ''}
      {Width ? <WidthForm /> : ''}

      <SubmitReviewButton>Submit</SubmitReviewButton>
    </ModalContent>
  );
}

WriteReviewForm.propTypes = {
  metaData: PropTypes.object.isRequired,
};

const ModalContent = styled.div`
  background-color: #fefefe;
  margin: 15% 10%;
  border: 3px solid #FFD24C;
  width: 80%;
`;

const SubmitReviewButton = styled.button`
  padding: 1%;
  background-color: white;
  float: right;
  margin-right: 2%;
  margin-top: 1%;
  border: 2px black solid;
  font-weight: bold;
  &:hover {
    cursor: pointer;
    background-color: #FFE69A;
  }
`;

export default WriteReviewForm;