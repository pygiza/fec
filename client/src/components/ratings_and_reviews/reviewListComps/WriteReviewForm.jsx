import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import axios from 'axios';
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

  const initialFormData = {
    product_id: metaData.product_id,
    rating: null,
    summary: "",
    body: "",
    recommend: null,
    name: "",
    email: "",
    photos: [],
    characteristics: {},
  };

  const [ { Comfort, Fit, Length, Quality, Size, Width }, setCharacteristics ] = useState(initialCharacteristics);

  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    setFormData({});
    document.getElementById('writeReview').reset();
  }, [metaData])

  useEffect(() => {
    setCharacteristics(initialCharacteristics);
    const newChars = {...initialCharacteristics};
    for(let key in metaData.characteristics) {
      newChars[key] = true;
    }
    setCharacteristics(newChars);
  }, [metaData]);

  function onSubmit (e) {
    e.preventDefault();
    axios.post('/reviews', formData)
      .then((res) => {
        console.log(res.status);
      })
      .catch((err) => {
        console.log('error posting review', err);
      });
  }

  function onFormChange (e, isChar) {
    if (isChar) {
      setFormData({
        ...formData,
        characteristics: {
          ...formData.characteristics,
          [e.target.name]: e.target.value,
          }
      });
      return;
    }
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <ModalContent>
      <h3>Write Your Review</h3>
      <h4>About the PRODUCT NAME</h4>
      <form id='writeReview' onSubmit={onSubmit}>
        {/* Overall Rating */}
        <p>Do you recommend this product?</p>
        <input type="radio" name="recommend" value="true" id="yesRec" onChange={onFormChange}/>
        <label htmlFor="yesRec">Yes</label>
        <input type="radio" name="recommend" value="false" id="noRec" onChange={onFormChange}/>
        <label htmlFor="noRec">No</label>

        <h4>Characteristics</h4>
        {Comfort ? <ComfortForm form="writeReview" onChange={onFormChange} /> : ''}
        {Fit ? <FitForm form="writeReview" onChange={onFormChange} /> : ''}
        {Length ? <LengthForm form="writeReview" onChange={onFormChange} /> : ''}
        {Quality ? <QualityForm form="writeReview" onChange={onFormChange} /> : ''}
        {Size ? <SizeForm form="writeReview" onChange={onFormChange} /> : ''}
        {Width ? <WidthForm form="writeReview" onChange={onFormChange} /> : ''}

        <h4>Review Summary</h4>
        <ReviewSummary type="text" name="summary" placeholder="Example: Best purchase ever!" maxlength="60" onChange={onFormChange}></ReviewSummary>

        <h4>Review Body</h4>
        <ReviewBody type="text" name="body" required={true} placeholder="Why did you like the product or not?" maxlength="1000" minlength="50" rows="5" onChange={onFormChange}/>

        <SubmitReviewButton type="Submit" />
      </form>
    </ModalContent>
  );
}

WriteReviewForm.propTypes = {
  metaData: PropTypes.object.isRequired,
};

const ModalContent = styled.div`
  background-color: #fefefe;
  padding: 2%;
  margin: 15% 10%;
  border: 3px solid black;
  width: 80%;

`;

const SubmitReviewButton = styled.input`
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

const ReviewBody = styled.textarea`
  width: 50%;
`;

const ReviewSummary = styled.input`
  width: 50%;
`;

export default WriteReviewForm;