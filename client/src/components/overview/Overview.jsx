import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Content from './ContentBox.jsx';

function Overview() {
  const [styles, setStyles] = useState('');
  const [image, setImage] = useState('');
  const [products, setProducts] = useState([]);

  const fetchStyles = (product) => {
    console.log('BIG P ', product);
    axios.get(`http://localhost:3000/products/${product.id}/styles`)
      .then((data) => {
        console.log(data.data.results[0].photos[0]);
        //setStyles((prevState) => [...prevState, data.data.results]);
        setImage(data.data.results[0].photos[0]);
      });
  };

  const fetchData = () => {
    axios.get('http://localhost:3000/products')
      .then((data) => {
        console.log('DATA DATA => ', data.data);
        setProducts(data.data[2]);
        fetchStyles(data.data[3]);
      }).catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      <NavBar>
        <Title>PyGiza</Title>
      </NavBar>
      <Main>
        <PhotoMain src={image.thumbnail_url} />
      </Main>
      <Content products={products} />
      <Footer>Footer</Footer>

    </Container>
  );
}

const Container = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: repeat(12, minmax(0,1fr));
  grid-template-rows: repeat(12, minmax(0,1fr));
  grid-gap: 0.25rem;
`;

const Title = styled.h1`
  object-fit: contain;
`;

const PhotoMain = styled.img`
  height: 100%;
  width: 100%;  
  object-fit: contain;
`;

const Main = styled.div`
border: solid;
grid-column: 3 / 8;
grid-row: 2 / 11;
padding: 0.25rem;
`;

const Footer = styled.div`
padding: 0.25rem;
border: solid;
grid-column: 3 /11;
grid-row: 11 / 13;
`;

const NavBar = styled.div`
background: #e8e8e8;
grid-column:  3 / 11;
padding: 0.25rem;
`;

export default Overview;
