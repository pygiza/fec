import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  height: 100vh;
  color: white;
`;

function Overview() {
  const [styles, setStyles] = useState([]);
  const [products, setProducts] = useState([]);

  const fetchStyles = (product) => {
    console.log('BIG P ', products.id);
    axios.get(`http://localhost:3000/products/${product.id}/styles`)
      .then((data) => {
        console.log(data.data.results);
        setStyles((prevState) => [...prevState, data.data.results]);
      });
  };

  const fetchData = () => {
    axios.get('http://localhost:3000/products')
      .then((data) => {
        console.log('DATA DATA => ', data.data);
        setProducts(data.data);
        data.data.forEach((product) => {
          fetchStyles(product);
        });
      }).catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    //fetchData();
  }, []);

  return (
    <Container>
      {/*       Soon there will be images!
      {products.map((product) => (
        <li>
        {product.name}
        {/* {styles.map((style) => {
        })} }
        </li>
      ))} */}
    </Container>
  );
}
export default Overview;
