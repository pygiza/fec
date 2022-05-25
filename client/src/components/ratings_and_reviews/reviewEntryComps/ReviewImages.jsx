import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function ReviewImages({ images }) {
  return(
    <div>
      {images.map((image) => <StyledImage key={image.id} src={image.url} />)}
    </div>
  );
}

ReviewImages.propTypes = {
  images: PropTypes.array,
};

const StyledImage = styled.img`
  width: 20%;
  margin: 1%;
  &:hover {
    border: 1px black solid;
    cursor: pointer;
  }
`;

export default ReviewImages;