import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import CarouselLabel from './CarouselLabel.jsx';
import CarouselList from './CarouselList.jsx';

const RelatedProductsContainer = function() {

  let [related, setRelated] = useState([]);

  useEffect(() => {
    axios.get('/products/37311/related', {
      params: {
        product_id: 37311
      }
    })
    .then(res => {
      setRelated(res.data);
    })
    .catch(err => {
      console.log('Couldnt get related products', err);
    })
  }, [])

  let addOutfit = function(id) {
    setRelated(related.concat([37316]));
  }

  return (
    <>
      <CarouselLabel label='RELATED PRODUCTS' />
      <CarouselList data='related products list' related={related} />
      <CarouselLabel label='YOUR OUTFIT' />
      <CarouselList data='your outfit list' addOutfit={addOutfit} />
    </>
  );
};

export default RelatedProductsContainer;
