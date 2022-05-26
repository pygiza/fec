import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function WriteReviewForm({ metaData }) {
  var charForms = [];
  for (let key in metaData.characteristics) {

  }
  return (
    <div>
      <h3>Write Your Review</h3>
      <h4>About the PRODUCT NAME</h4>
      {/* Overall Rating */}
      <p>Do you recommend this product?</p>
      <input type="radio" name="recommend" value="true" id="yesRec" />
      <label htmlFor="yesRec">Yes</label>
      <input type="radio" name="recommend" value="false" id="noRec" />
      <label htmlFor="noRec">No</label>

      <h4>Characteristics</h4>

    </div>
  );
}

WriteReviewForm.propTypes = {
  metaData: PropTypes.object.isRequired,
};

export default WriteReviewForm;