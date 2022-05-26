import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function WriteReviewForm({ metaData }) {
  return (
    <div>
      <h3>Write Your Review</h3>
      <h4>About the PRODUCT NAME</h4>
      {/* Overall Rating */}
      <p>Do you recommend this product?</p>
      <input type="radio" name="rec" value="true" id="yesRec" />
      <label htmlFor="yesRec">Yes</label>
      <input type="radio" name="rec" value="false" id="noRec" />
      <label htmlFor="noRec">No</label>

      <h4>Characteristics</h4>

    </div>
  );
}

WriteReviewForm.propTypes = {
  metaData: PropTypes.object.isRequired,
};

export default WriteReviewForm;