const path = require("path");
const express = require("express");
const axios = require("axios");
require("dotenv").config();

const app = express();

// Middleware
app.use(express.static(path.join(__dirname, "..", "/client/dist")));
app.use(express.json());

// Routes
app.all('/*', (req, res) => {
  console.log(`recieved ${req.method.toLowerCase()} request from ${req.url}`);
  var url = "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe" + req.url;
  // console.log(url);
  console.log('the widget', req.query);

  axios({
    url: url,
    method: req.method.toLowerCase(),
    headers: {
      Authorization: process.env.AUTH,
    },
    params: req.body,
    data: req.body
  })
    .then( (data) => {
      console.log('data');
      res.status(data.status).send(data.data);
    })
    .catch( (err) => {
      console.log('error fetching from api', err);
      res.sendStatus(500);
    });

});

app.listen(process.env.PORT);