// const request = require('supertest');
const axios = require('axios');
require("dotenv").config();

test('get products', () => {
  return axios('http://localhost:3000/products').then(data => {
    expect(data.data.length).toBe(5);
  });
});

test('server fetches products with specified parameter', () => {
  return axios({
    url: 'http://localhost:3000/products',
    method: 'get',
    params: {
      count: 7
    }
  }).then(data => {
    expect(data.data.length).toBe(7);
  });
});

test('server posts a question with req body info', () => {
  return axios({
    url: 'http://localhost:3000/qa/questions',
    method: 'post',
    data: {
      "body": "How comfy are these shoes?",
      "name": "Sam",
      "email": "sam@yahoo.com",
      "product_id": 37311
    }
  }).then(data => {
    expect(data.status).toBe(201);
  })
    .catch(err => {
      console.log(err);
    })
});

test('server successfully submits a put request', () => {
  return axios({
    url: 'http://localhost:3000/qa/questions/593366/helpful',
    method: 'put'
  }).then(data => {
    expect(data.status).toBe(204);
  })
    .catch(err => {
      console.log(err);
    })
});