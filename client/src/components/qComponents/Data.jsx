import React from 'react';
import axios from 'axios';

function GetData(props) {
  return axios({
    url: 'http://localhost:3000/qa/questions',
    method: 'get',
    params: {
      product_id: props.id,
      count: 100
    }
  });
}

export default GetData;