import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ComparisonModal from './ComparisonModal.jsx';
import CarouselLabel from './CarouselLabel.jsx';
import CarouselList from './CarouselList.jsx';

const RelatedProductsContainer = function({ product_id, renderProduct }) {

  let [product, setProduct] = useState({ name: '', features: [] });
  let [compare, setCompare] = useState({ name: '', features: [] });
  let [related, setRelated] = useState([]);
  let [outfit, setOutfit] = useState([]);
  let [modalDisplay, setModalDisplay] = useState('none');
  let [refresh, setRefresh] = useState(1);

  useEffect(() => {
    // Get data (name, features) for product_id and store in 'product'
    axios.get(`/products/${product_id}`)
      .then(res => setProduct({ name: res.data.name, features: res.data.features }))
      .catch(err => console.log('Couldnt get product features', err));

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
      let outfitIds = getOutfitIds();
      Promise.all(outfitIds.map(product_id => axios.get(`/products/${product_id}`)))
        .then(responses => {
          let products = responses
            .map(response => response.data)
            .filter(product => product !== undefined);

          setOutfit(products);
        })
        .catch(err => console.log('couldnt get product data for outfits', err));

  }, [product_id])

  const getOutfitIds = function() {
    if (localStorage.getItem('outfit') === null) {
      localStorage.setItem('outfit', JSON.stringify([]));
    }
    return JSON.parse(localStorage.getItem('outfit'));
  }

  const getProductImage = function(id) {
    return axios.get(`/products/${id}/styles`)
      .then(res => {
        return res.data.results[0].photos[0].thumbnail_url;
      })
      .catch(err => console.log('couldnt grab image of related product', err));
  }

  const addOutfit = function() {
    let oldOutfitIds = JSON.parse(localStorage.getItem('outfit'));
    localStorage.setItem('outfit', JSON.stringify(oldOutfitIds.concat([product_id])));

    axios.get(`/products/${product_id}`)
      .then(res => setOutfit(outfit.concat([res.data])))
      .catch(err => console.log('couldnt add outfit', err));
  }

  const removeOutfit = function(e, id) {
    let oldOutfitIds = JSON.parse(localStorage.getItem('outfit'));
    oldOutfitIds.splice(oldOutfitIds.indexOf(id), 1);
    localStorage.setItem('outfit', JSON.stringify(oldOutfitIds));
    let newOutfit = outfit.filter(product => product.id !== id);
    setOutfit(newOutfit);
  }

  const toggleModal = function(e, name = '', features = []) {
    setCompare({ name, features });
    setModalDisplay( modalDisplay === 'none' ? 'block' : 'none');
  }

  return (
    <>
      <button onClick={() => setRefresh(refresh + 1)} />
      <ComparisonModal display={modalDisplay} close={toggleModal} product={product} compare={compare} />
      <CarouselLabel label='RELATED PRODUCTS' />
      <CarouselList listType='related' related={related} renderProduct={renderProduct} relatedButtonHandler={toggleModal}/>
      <CarouselLabel label='YOUR OUTFIT' />
      <CarouselList listType='outfit' addOutfit={addOutfit} outfitButtonHandler={removeOutfit} outfit={outfit} renderProduct={renderProduct} />
    </>
  );
};

export default RelatedProductsContainer;
