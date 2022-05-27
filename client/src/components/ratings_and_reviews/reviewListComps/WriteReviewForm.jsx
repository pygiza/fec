import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ComfortForm from '../postReviewComps/Comfort.jsx';
import FitForm from '../postReviewComps/Fit.jsx';
import Length from '../postReviewComps/Length.jsx';
import Quality from '../postReviewComps/Quality.jsx';
import Size from '../postReviewComps/Size.jsx';
import Width from '../postReviewComps/Width.jsx';

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
      <ComfortForm />

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

export default WriteReviewForm;