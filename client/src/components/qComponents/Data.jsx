import React from 'react';
import axios from 'axios';

function GetData(props) {
  return axios({
    url: '/qa/questions',
    method: 'get',
    params: {
      product_id: props.id,
      count: 100
    }
  });
}

export default GetData;