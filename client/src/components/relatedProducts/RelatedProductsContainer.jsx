import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import CarouselLabel from './CarouselLabel.jsx';
import CarouselList from './CarouselList.jsx';

const RelatedProductsContainer = function({ product_id, renderProduct }) {

  let [related, setRelated] = useState([]);
  let [outfit, setOutfit] = useState([]);

  useEffect(() => {
    // Get the product data of all products related to product_id and store in 'related'
    axios.get(`/products/${product_id}/related`)
      .then(res => {
        let product_ids = res.data;
        Promise.all(product_ids.map(product_id => axios.get(`/products/${product_id}`)))
          .then(responses => {
            let products = responses
              .map(response => response.data)
              .filter(product => product !== undefined);

            // Promise.all(products.map(product => getProductImage(product.id)))
            //   .then(products => {

            //   })
            //   .catch(err => 'couldnt get images for related products', err);

            setRelated(products);
          })
          .catch(err => console.log('Couldnt grab related product data', err));
      })
      .catch(err => console.log('Couldnt get related products', err));

    // If the user is visiting the site for the first time, initialize local storage to be an empty array
    if (localStorage.getItem('outfit') === null) {
      localStorage.setItem('outfit', JSON.stringify([]));
    } else {
      setOutfit(JSON.parse(localStorage.getItem('outfit')));
    }
  }, [product_id])

  const getProductImage = function(id) {
    return axios.get(`/products/${id}/styles`)
      .then(res => {
        return res.data.results[0].photos[0].thumbnail_url;
      })
      .catch(err => console.log('couldnt grab image of related product', err));
  }

  const addOutfit = function(id) {
    let oldOutfit = JSON.parse(localStorage.getItem('outfit'));
    let newOutfit = oldOutfit.concat([37316]);
    localStorage.setItem('outfit', JSON.stringify(newOutfit));
    setOutfit(newOutfit);
  }

  const removeOutfit = function(id) {
    let oldOutfit = JSON.parse(localStorage.getItem('outfit'));
    oldOutfit.shift();
    localStorage.setItem('outfit', JSON.stringify(oldOutfit));
    setOutfit(oldOutfit);
  }
  return (
    <>
      <CarouselLabel label='RELATED PRODUCTS' />
      <CarouselList listType='related' related={related} renderProduct={renderProduct} />
      <CarouselLabel label='YOUR OUTFIT' />
      <CarouselList listType='outfit' addOutfit={addOutfit} removeOutfit={removeOutfit} outfit={outfit} renderProduct={renderProduct} />
    </>
  );
};

export default RelatedProductsContainer;
