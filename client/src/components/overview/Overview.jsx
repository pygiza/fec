import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Content from './ContentBox.jsx';
import Footer from './Footer.jsx';
import MainBox from './Main.jsx';

function Overview() {
  const [styles, setStyles] = useState('');
  const [image, setImage] = useState('');
  const [currentImageIndex, setcurrentImageIndex] = useState(0);
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
    axios.get('http://localhost:3000/products')
      .then((data) => {
        setProducts(data.data[2]); //data.data is the full list of prodcuts.
        fetchStyles(data.data[2]);
      }).catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleImageClick = (e) => {
    e.preventDefault();
    if (e.target.value === 'right') {
      setcurrentImageIndex(currentImageIndex + 1);
    } else if (e.target.value === 'left') {
      if (currentImageIndex > 0) {
        setcurrentImageIndex(currentImageIndex - 1);
      }
    }
    if (currentImageIndex === image.length - 1) {
      setcurrentImageIndex(0);
    }
  };

  return (
    <Container>
      <NavBar>
        <Title>PyGiza</Title>
      </NavBar>
      <MainBox image={image[currentImageIndex]} handleClick={handleImageClick} />
      <Content products={products} images={image} />
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
