import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ComparisonModal from './ComparisonModal.jsx';
import CarouselLabel from './CarouselLabel.jsx';
import CarouselList from './CarouselList.jsx';

const RelatedProductsContainer = function({ productId, renderProduct, productInfo }) {

  let [product, setProduct] = useState({ name: '', features: [] });
  let [compare, setCompare] = useState({ name: '', features: [] });
  let [related, setRelated] = useState([]);
  let [outfit, setOutfit] = useState([]);
  let [modalDisplay, setModalDisplay] = useState('none');

  useEffect(() => {
    // Get main product info
    // getProduct(productId)
    //   .then(product => setProduct(product))
    //   .catch(err => console.log('couldnt get main product info'));
    productInfo.price = { origPrice: productInfo.defaultPrice, salePrice: null };
    setProduct(productInfo);

    // Get related products info
    axios.get(`/products/${productId}/related`)
      .then(res => {
        let relatedIds = res.data;
        Promise.all(relatedIds.map(id => getProduct(id)))
          .then(products => products.filter(product => product !== undefined))
          .then(products => setRelated(products))
          .catch(err => console.log('couldnt get related products', err));
      })

    // Add 'add' button to outfit list if product not in outfit
    let outfitIds = getOutfitIds();
    if (!outfitIds.includes(productId)) {
      setOutfit(['add'].concat(outfit));
    }

    }, [productId])

  useEffect(() => {
    // Get outfit list info
    let outfitIds = getOutfitIds();
    Promise.all(outfitIds.map(id => getProduct(id)))
      .then(products => products.filter(product => product !== undefined))
      .then(products => {
        let contains = products.reduce((flag, product) => {
          return flag || product.id === productId;
        }, false);

        setOutfit(outfitIds.includes(productId) ? products : ['add'].concat(products));
      })
      .catch(err => console.log('couldnt get outfit products', err));
  }, [])

  const getProduct = function(id) {
    return axios.get(`products/${id}`)
      .then(res => {
        return res.data;
      })
      .then(product => {
        return axios.get(`products/${id}/styles`)
          .then(res => {
            product.image = res.data.results[0].photos[0].url;
            product.price = { origPrice: res.data.results[0].original_price, salePrice: res.data.results[0].sale_price }
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

  const calculateAvgRating = function(ratings) {
    let reviews = 0;
    let ratingSum = 0;
    for (let rating in ratings) {
      ratingSum += ratings[rating] * rating;
      reviews += Number(ratings[rating]);
    }
    return (Math.round((ratingSum/reviews) * 4) / 4);
  }

  const addOutfit = function() {
    let oldOutfitIds = JSON.parse(localStorage.getItem('outfit'));
    localStorage.setItem('outfit', JSON.stringify([productId].concat(oldOutfitIds)));

    outfit.splice(0, 1);
    setOutfit([product].concat(outfit));
    getProduct(productId)
      .then(product => setOutfit([product].concat(outfit)))
      .catch(err => console.log('couldnt add item to outfit', err));
  }

  const removeOutfit = function(e, id) {
    let oldOutfitIds = JSON.parse(localStorage.getItem('outfit'));
    oldOutfitIds.splice(oldOutfitIds.indexOf(id), 1);
    localStorage.setItem('outfit', JSON.stringify(oldOutfitIds));
    let newOutfit = outfit.filter(product => product.id !== id);
    let extension = id === productId ? ['add'] : [];
    setOutfit(extension.concat(newOutfit));
  }

  const toggleModal = function(e, name = '', features = []) {
    setCompare({ name, features });
    setModalDisplay( modalDisplay === 'none' ? 'block' : 'none');
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
