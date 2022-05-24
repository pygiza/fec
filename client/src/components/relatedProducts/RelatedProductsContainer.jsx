import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import CarouselLabel from './CarouselLabel.jsx';
import CarouselList from './CarouselList.jsx';

const RelatedProductsContainer = function() {

  let [related, setRelated] = useState([]);
  let [outfit, setOutfit] = useState([]);

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

    if (localStorage.getItem('outfit') === 'null') {
      localStorage.setItem('outfit', JSON.stringify([]));
      console.log('what is localstorage?', localStorage.getItem('outfit'));
    } else {
      setOutfit(JSON.parse(localStorage.getItem('outfit')));
      console.log('this is outfit', outfit)
    }
  }, [])

  let addOutfit = function(id) {
    let oldOutfit = JSON.parse(localStorage.getItem('outfit'));
    console.log('our old outfit', oldOutfit);
    let newOutfit = oldOutfit.concat([37316]);
    localStorage.setItem('outfit', JSON.stringify(newOutfit));
    setOutfit(newOutfit);
  }

  return (
    <>
      <CarouselLabel label='RELATED PRODUCTS' />
      <CarouselList data='related products list' related={related} />
      <CarouselLabel label='YOUR OUTFIT' />
      <CarouselList data='your outfit list' addOutfit={addOutfit} outfit={outfit} />
    </>
  );
};

export default RelatedProductsContainer;
