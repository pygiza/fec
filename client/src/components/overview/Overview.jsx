import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Content from './ContentBox.jsx';
import Footer from './Footer.jsx';
import MainBox from './Main.jsx';

function Overview({ productId }) {
  //const [styles, setStyles] = useState('');
  const [image, setImage] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [products, setProducts] = useState([]);

  const fetchStyles = (product) => {
    console.log('BIG P ', product);
    axios.get(`http://localhost:3000/products/${product.id}/styles`)
      .then((data) => {
        console.log('Images: ', data.data.results[0].photos);
        //setStyles((prevState) => [...prevState, data.data.results]);
        setImage(data.data.results[0].photos);
      });
  };

  const fetchData = () => {
    axios.get(`http://localhost:3000/products/${productId}`)
      .then((data) => {
        setProducts(data.data); //data.data is the full list of prodcuts.
        fetchStyles(data.data);
      }).catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
    setCurrentImageIndex(0);
  }, [productId]);

  const handleImageClick = (e) => {
    e.preventDefault();
    if (e.target.value === 'right') {
      setCurrentImageIndex(currentImageIndex + 1);
    } else if (e.target.value === 'left') {
      if (currentImageIndex > 0) {
        setCurrentImageIndex(currentImageIndex - 1);
      }
    }
    if (currentImageIndex === image.length - 1) {
      setCurrentImageIndex(0);
    }
  };

  const handleStylesClick = (e) => {
    e.preventDefault();
    console.log(typeof e.target.id)
    setCurrentImageIndex(Number(e.target.id));
  }

  return (
    <Container>
      <NavBar>
        <Title>PyGiza</Title>
      </NavBar>
      <MainBox productId={productId} image={image[currentImageIndex]} handleClick={handleImageClick} />
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
  //grid-gap: 0.25rem;

const Title = styled.h1`
  object-fit: contain;
`;

const NavBar = styled.div`
border-bottom: solid;
border-color: #92B4EC;
grid-column:  3 / 11;
padding: 0.25rem;
`;
// background: #92B4EC;

export default Overview;
