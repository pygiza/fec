import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

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
        setProducts(data.data[0]);
        fetchStyles(data.data[0]);
      }).catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
       <NavBar>NavBar</NavBar>
      <Main>
        <PhotoMain src={image.url} />
      </Main>
      <SideBar>SideBar</SideBar>
      <Footer>Footer</Footer>
      <ContentBox>
        <h3>{products.name}</h3>
        <Content1>ContentBox</Content1>
      </ContentBox>

    </Container>
  );
}

const Container = styled.div`
  display: grid;
  height: 90vh;
  color: white;
  grid-template-rows: 0.1fr 1fr 0.5fr 0.5fr;
  grid-template-areas:
    "nav nav nav nav nav nav"
    "sidebar main main main content content"
    "sidebar main main main content content"
    "sidebar footer footer footer content content";
  text-align: center;
  grid-gap: 0.25rem;
`;

const PhotoMain = styled.img`
  height: 100%;
  width: 100%;  
  object-fit: contain;
`;

const NavBar = styled.nav`
  background: #3a3a55;
  grid-area: nav;
  padding: 0.25rem;
`;
const Main = styled.main`
  border: solid;
  color: white;
  grid-area: main;
  padding: 0.25rem;
`;
const SideBar = styled.div`
  background: #9aaab7;
  grid-area: sidebar;
  padding: 0.25rem;
`;

const ContentBox = styled.div`
  display: flex;
  gap: 0.25rem;
  padding: 0.25rem;
  align-items: center;
  grid-area: content;
  justify-content: center;
`;
const Content1 = styled.div`
  background: #a6b8b9;
  padding: 0.25rem;
  width: 100%;
  height: 100%;
`;
const Content2 = styled(Content1)``;
const Content3 = styled(Content1)``;
const Footer = styled.footer`
  background: #ff9637;
  grid-area: footer;
  padding: 0.25rem;
`;


export default Overview;
