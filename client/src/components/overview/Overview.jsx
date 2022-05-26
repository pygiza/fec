import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Content from './ContentBox.jsx';
import Footer from './Footer.jsx';
import MainBox from './Main.jsx';

function Overview({ productId }) {
  const [image, setImage] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [products, setProducts] = useState([]);
  const [firstThumbnail, setFirstThumbnail] = useState(0);
  const [lastThumbnail, setLastThumbnail] = useState(5);
  const [thumbnailIndex, setThumbnailIndex] = useState(currentImageIndex);

  const fetchStyles = (product) => {
    axios.get(`http://localhost:3000/products/${product.id}/styles`)
      .then((data) => {
        console.log('Set Image to: ', data.data.results[0].photos)
        setImage(data.data.results[0].photos);
      });
  };

  const fetchData = () => {
    axios.get(`http://localhost:3000/products/${productId}`)
      .then((data) => {
        setProducts(data.data); //data.data is the full list of products.
        fetchStyles(data.data);
      }).catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
    setCurrentImageIndex(0);
    setThumbnailIndex(0);
  }, [productId]);

  const handleImageClick = (e) => {
    e.preventDefault();
    if (e.target.value === 'right') {
      setCurrentImageIndex(currentImageIndex + 1);
      setThumbnailIndex(currentImageIndex + 1);
    } else if (e.target.value === 'left') {
      if (currentImageIndex > 0) {
        setCurrentImageIndex(currentImageIndex - 1);
        setThumbnailIndex(currentImageIndex - 1);
      }
    }
    if (currentImageIndex === image.length - 1) {
      setCurrentImageIndex(0);
      setThumbnailIndex(0);
    }
  };

  const handleStylesClick = (e) => {
    e.preventDefault();
    setCurrentImageIndex(Number(e.target.id));
    setThumbnailIndex(Number(e.target.id));
  }

  // Thumbnail Carousel location function
  const updateLocation = (e) => {
    e.preventDefault();
    if (e.target.value === 'bottom') {
      if (currentImageIndex < 5) {
        setCurrentImageIndex(currentImageIndex + 1);
        console.log(currentImageIndex)
        setThumbnailIndex(currentImageIndex +1);
      }
      if (currentImageIndex >= 4) { // this is because thumbnail carousel only holds 5
        console.log('The Last Thumb ',lastThumbnail)
        if (lastThumbnail < image.length) {
          setFirstThumbnail(firstThumbnail + 1);
          setLastThumbnail(lastThumbnail + 1);
          setThumbnailIndex(4); // this index need to advance based on overall images
                                  // Thumbnail index need to always be between 0 and 4
        }
      }
    }
    if (e.target.value === 'top') {
      console.log('Current Image Index and TOP!!!', currentImageIndex)
      if (currentImageIndex > 0 ) {
        setCurrentImageIndex(currentImageIndex - 1);
        if (thumbnailIndex !== 0) {
          setThumbnailIndex(thumbnailIndex - 1);
        }
      }
      if (currentImageIndex <= 1) {
        if (firstThumbnail > 0) {
          setFirstThumbnail(firstThumbnail - 1);
          setLastThumbnail(lastThumbnail - 1);
        }
      }
      if (currentImageIndex === image.length-1) { 
              console.log('AM I GETTING HERE OR NOT COME ON MAN')
              setThumbnailIndex(3);
              setCurrentImageIndex(image.length - 2)
      }
    }
  }

  const modifyThumbnailArray = () => {
    return image.slice(firstThumbnail, lastThumbnail);
  }

  return (
    <Container>
      <NavBar>
        <Title>PyGiza</Title>
      </NavBar>
      <MainBox 
        image={image[currentImageIndex]} 
        handleClick={handleImageClick} 
        images={modifyThumbnailArray} //pass thumbnailImages
        currentImageIndex={thumbnailIndex} //was currentImageIndex
        firstThumbnail={firstThumbnail}
        lastThumbnail={lastThumbnail}
        updateLocation={updateLocation}
        />
      <Content products={products} images={image} stylesClick={handleStylesClick} />
      <Footer products={products} />
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  height: 100vh;
  grid-gap: 0.25rem;
  grid-template-columns: repeat(12, minmax(0,1fr));
  grid-template-rows: repeat(12, minmax(0,1fr));
  `;

const Title = styled.h1`
  object-fit: contain;
`;

const NavBar = styled.div`
border-bottom: solid;
border-color: #92B4EC;
grid-column:  3 / 11;
padding: 0.25rem;
`;

export default Overview;
