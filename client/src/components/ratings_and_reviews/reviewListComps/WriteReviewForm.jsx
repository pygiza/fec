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
// import Missing from './Missing.jsx';

function WriteReviewForm({ metaData, productInfo, toggleWriteReview }) {

  const initialCharacteristics = {
    Comfort: false,
    Fit: false,
    Length: false,
    Quality: false,
    Size: false,
    Width: false,
  };

  const initialFormData = {
    product_id: parseInt(metaData.product_id),
    rating: null,
    summary: "",
    body: null,
    recommend: null,
    name: null,
    email: null,
    photos: [],
    characteristics: null,
  };

  const [ { Comfort, Fit, Length, Quality, Size, Width }, setCharacteristics ] = useState(initialCharacteristics);

  const [formData, setFormData] = useState(initialFormData);

  // const [missing, setMissing] = useState(false);

  useEffect(() => {
    setFormData(initialFormData);
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

  // useEffect(() => {
  //   setMissing(false);
  // }, [metaData]);

  function onSubmit (e) {
    e.preventDefault();
    let formattedFormData = {
      ...formData,
    };

    if (formattedFormData.recommend === 'true') {
      formattedFormData.recommend = true;
    } else {
      formattedFormData.recommend = false;
    }

    axios.post('/reviews', formattedFormData)
      .then((res) => {
        toggleWriteReview();
        document.getElementById('writeReview').reset();
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
          [e.target.name]: parseInt(e.target.value),
          }
      });
      return;
    }
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function onStarClick (e) {
    let currentStar = parseInt(e.target.id[4]);
    setFormData({
      ...formData,
      rating: currentStar,
    });
    for (let i = 1; i < 6; i++) {
      let star = document.getElementById(`star${i}`);
      let label = document.getElementById(`starLabel${i}`);
      let classNames = star.className.split(" ");
      if (i < currentStar) {
        classNames[0] = "fa-solid";
        label.style.display = 'none';
      } else if (i === currentStar) {
        label.style.display = 'block';
        classNames[0] = "fa-solid";
      } else {
        classNames[0] = "fa-regular";
        label.style.display = 'none';
      }
      star.className = classNames.join(" ");
    }

  }

  return (
    <ModalContent>
      <h3>Write Your Review</h3>
      <h4>About the {productInfo.name}</h4>
      <form id='writeReview' onSubmit={onSubmit}>

        <h4>Overall Rating*:</h4>
        <StarRating>
          <StarIcon className="fa-regular fa-star fa-1x" id="star1" onClick={onStarClick}/>
          <StarIcon className="fa-regular fa-star fa-1x" id="star2" onClick={onStarClick}/>
          <StarIcon className="fa-regular fa-star fa-1x" id="star3" onClick={onStarClick}/>
          <StarIcon className="fa-regular fa-star fa-1x" id="star4" onClick={onStarClick}/>
          <StarIcon className="fa-regular fa-star fa-1x" id="star5" onClick={onStarClick}/>
          <div><StarLabel id="starLabel1">Poor</StarLabel></div>
          <div><StarLabel id="starLabel2">Fair</StarLabel></div>
          <div><StarLabel id="starLabel3">Average</StarLabel></div>
          <div><StarLabel id="starLabel4">Good</StarLabel></div>
          <div><StarLabel id="starLabel5">Great</StarLabel></div>
        </StarRating>

        <h4>Do you recommend this product?*</h4>
        <input type="radio" name="recommend" value={true} id="yesRec" onChange={onFormChange} required={true}/>
        <label htmlFor="yesRec">Yes</label>
        <input type="radio" name="recommend" value={false} id="noRec" onChange={onFormChange}/>
        <label htmlFor="noRec">No</label>

        <h4>Characteristics*</h4>
        {Comfort ? <ComfortForm form="writeReview" onChange={onFormChange} /> : ''}
        {Fit ? <FitForm form="writeReview" onChange={onFormChange} /> : ''}
        {Length ? <LengthForm form="writeReview" onChange={onFormChange} /> : ''}
        {Quality ? <QualityForm form="writeReview" onChange={onFormChange} /> : ''}
        {Size ? <SizeForm form="writeReview" onChange={onFormChange} /> : ''}
        {Width ? <WidthForm form="writeReview" onChange={onFormChange} /> : ''}

        <h4>Nickname*</h4>
        <ReviewInput type="text" name="name" placeholder="Jane123" maxlength="60" onChange={onFormChange} required={true}></ReviewInput>

        <h4>Email*</h4>
        <ReviewInput type="text" name="email" placeholder="JaneDoe@gmail.com" maxlength="60" onChange={onFormChange} required={true}></ReviewInput>

        <h4>Review Summary</h4>
        <ReviewInput type="text" name="summary" placeholder="Example: Best purchase ever!" maxlength="60" onChange={onFormChange}></ReviewInput>

        <h4>Review Body*</h4>
        <ReviewBody type="text" name="body" required={true} placeholder="Why did you like the product or not?" maxlength="1000" minlength="50" rows="5" onChange={onFormChange}/>

        {/* {missing ? <Missing formData={formData} /> : ""} */}
        <SubmitReviewButton type="Submit" />
      </form>
    </ModalContent>
  );
}

WriteReviewForm.propTypes = {
  metaData: PropTypes.object.isRequired,
  productInfo: PropTypes.object.isRequired,
  toggleWriteReview: PropTypes.func.isRequired,
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

const ReviewInput = styled.input`
  width: 50%;
`;

const StarRating = styled.div`
  display: grid;
  text-align: center;
  grid-template-columns: auto auto auto auto auto;
  row-gap: 5%;
`;

const StarLabel = styled.div`
  display: none;
`;

const StarIcon = styled.i`
  &:hover {
    cursor: pointer;
    font-size: 20px;
  }
`;

export default WriteReviewForm;