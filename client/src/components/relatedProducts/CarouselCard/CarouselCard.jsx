import React from 'react';
import axios from 'axios';
import Card from '../Styles.jsx';
import CardTop from './CardTop/CardTop.jsx';
import CardBtm from './CardBtm/CardBtm.jsx';

const CarouselCard = function({ product_id }) {

  let [product, setProduct] = React.useState({});

  React.useEffect(() => {
    axios.get(`/products/${product_id}`, { params: { product_id } })
      .then(res => {
        let pData = res.data;

        axios.get(`/products/${product_id}/styles`, { params: { product_id } })
          .then(res => {
            pData.image = res.data.results[0].photos[0].thumbnail_url;

            axios.get(`/reviews/meta`, { params: { product_id } })
              .then(res => {
                pData.characteristics = res.data.characteristics;

                let total = 0;
                let reviews = 0;
                for (let rating in res.data.ratings) {
                  total += res.data.ratings[rating] * rating;
                  reviews += Number(res.data.ratings[rating]);
                }
                pData.rating = (Math.round( (total / reviews) * 4 ) / 4).toFixed(2);

                setProduct(pData);
              })
              .catch(err => console.log('couldnt grab ratings', err));
          })
          .catch(err => console.log('couldnt get photo of product', err));
      })
      .catch(err => console.log('couldnt get product', product_id, err))
  }, [])

  return (
    <Card>
      <CardTop image={product.image} characteristics={product.characteristics} />
      <CardBtm category={product.category} name={product.name} price={product.default_price} rating={product.rating} />
    </Card>
  )
}

export default CarouselCard;