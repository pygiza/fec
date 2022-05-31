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

  useEffect(() => {
    // Get main product info
    getProduct(product_id)
      .then(product => setProduct(product))
      .catch(err => console.log('couldnt get main product info'));

    // Get related products info
    axios.get(`/products/${product_id}/related`)
      .then(res => {
        let relatedIds = res.data;
        Promise.all(relatedIds.map(id => getProduct(id)))
          .then(products => setRelated(products))
          .catch(err => console.log('couldnt get related products', err));
      })

    // Get outfit list info
    let outfitIds = getOutfitIds();
    Promise.all(outfitIds.map(id => getProduct(id)))
      .then(products => {
        let contains = products.reduce((flag, product) => {
          return flag || product.id === product_id;
        }, false);

        setOutfit(contains ? products : ['add'].concat(products));
      })
      .catch(err => console.log('couldnt get outfit products', err));

  }, [product_id])

  const getProduct = function(id) {
    return axios.get(`products/${id}`)
      .then(res => {
        return res.data;
      })
      .then(product => {
        return axios.get(`products/${id}/styles`)
          .then(res => {
            product.image = res.data.results[0].photos[0].url;
            return product;
          })
      })
      .then(product => {
        return axios.get(`reviews/meta`, { params: { product_id: id } })
          .then(res => {
            product.rating = calculateAvgRating(res.data.ratings);
            return product;
          })
      })
      .catch(err => console.log('couldnt get product: ', id, err));
  }

  const getOutfitIds = function() {
    if (localStorage.getItem('outfit') === null) {
      localStorage.setItem('outfit', JSON.stringify([]));
    }
    return JSON.parse(localStorage.getItem('outfit'));
  }

  const addOutfit = function() {
    let oldOutfitIds = JSON.parse(localStorage.getItem('outfit'));
    localStorage.setItem('outfit', JSON.stringify([product_id].concat(oldOutfitIds)));

    outfit.splice(0, 1)
    setOutfit([product].concat(outfit));
  }

  const removeOutfit = function(e, id) {
    let oldOutfitIds = JSON.parse(localStorage.getItem('outfit'));
    oldOutfitIds.splice(oldOutfitIds.indexOf(id), 1);
    localStorage.setItem('outfit', JSON.stringify(oldOutfitIds));
    let newOutfit = outfit.filter(product => product.id !== id);
    let extension = id === product_id ? ['add'] : [];
    setOutfit(extension.concat(newOutfit));
  }

  const toggleModal = function(e, name = '', features = []) {
    setCompare({ name, features });
    setModalDisplay( modalDisplay === 'none' ? 'block' : 'none');
  }

  const calculateAvgRating = function(ratings) {
    let reviews = 0;
    let ratingSum = 0;
    for (let rating in ratings) {
      ratingSum += ratings[rating] * rating;
      reviews += Number(ratings[rating]);
    }
    return (Math.round((ratingSum/reviews) * 4) / 4);
  }

  return (
    <div style={{ marginLeft: '10%' }}>
      <ComparisonModal display={modalDisplay} close={toggleModal} product={product} compare={compare} />
      <CarouselLabel label='RELATED PRODUCTS' />
      <CarouselList listType='related' related={related} renderProduct={renderProduct} relatedButtonHandler={toggleModal}/>
      <CarouselLabel label='YOUR OUTFIT' />
      <CarouselList listType='outfit' addOutfit={addOutfit} outfitButtonHandler={removeOutfit} outfit={outfit} renderProduct={renderProduct} />
    </div>
  );
};

export default RelatedProductsContainer;
