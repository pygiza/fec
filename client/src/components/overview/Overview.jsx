import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Content from './ContentBox.jsx';
import Footer from './Footer.jsx';
import MainBox from './Main.jsx';

function Overview({ productId }) {
  const [image, setImage] = useState('');
  const [styles, setStyles] = useState('');
  const [stylesIndex, setStylesIndex] = useState(0);
  const [skus, setSkus] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [products, setProducts] = useState([]);
  const [firstThumbnail, setFirstThumbnail] = useState(0);
  const [lastThumbnail, setLastThumbnail] = useState(5);
  const [thumbnailIndex, setThumbnailIndex] = useState(currentImageIndex);

  const fetchStyles = (product) => {
    axios.get(`/products/${product.id}/styles`)
      .then((data) => {
        // console.log('Set Image to: ', data.data.results[0].photos)
        setStyles(data.data.results);
        setImage(data.data.results[0].photos);
        makeSkuArray(data.data.results, 0);
      });
  };

  const fetchData = () => {
    axios.get(`/products/${productId}`)
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

  const makeSkuArray = (styles, index) => { //sets skus as array
    let skuArray = [{size:'Select a Size'}];
    let skuObj = styles[index].skus;
    //add id to quantity size object
    for (let key in skuObj) {
      skuObj[key].id=key;
    }
    //add the new object to an array for iteration
    for(let key in skuObj) {
      skuArray.push(skuObj[key])
    }
    //console.log('SKUARR: ', skuArray)
    setSkus(skuArray);
  }

  const handleStylesClick = (e) => {
    e.preventDefault();
    setImage(styles[Number(e.target.id)].photos);
    makeSkuArray(styles, Number(e.target.id));
    setStylesIndex(Number(e.target.id));

    // setCurrentImageIndex(Number(e.target.id));
    // setThumbnailIndex(Number(e.target.id));
  }

  // Thumbnail Carousel location function
  const updateLocation = (e) => {
    e.preventDefault();
    if (e.target.value === 'bottom') {
      if (currentImageIndex < 5) {
        setCurrentImageIndex(currentImageIndex + 1);
        setThumbnailIndex(currentImageIndex +1);
      }
      if (currentImageIndex >= 4) { // this is because thumbnail carousel only holds 5
        if (lastThumbnail < image.length) {
          setFirstThumbnail(firstThumbnail + 1);
          setLastThumbnail(lastThumbnail + 1);
          setThumbnailIndex(4); // this index need to advance based on overall images
                                  // Thumbnail index need to always be between 0 and 4
        }
      }
    }
    if (e.target.value === 'top') {
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
      <Content products={products} styles={styles} stylesClick={handleStylesClick} skus={skus} stylesIndex={stylesIndex} />
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

const Title = styled.div`
  object-fit: contain;
  font-Size: 2.7vw;
  font-weigh: bold;
  margin-top: .25em;
`;

const NavBar = styled.div`
border-bottom: solid;
border-color: #92B4EC;
grid-column:  3 / 11;
padding: 0.25rem;
`;

export default Overview;
