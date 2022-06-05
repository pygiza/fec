# PyGize E-Commerce

PyGiza is an E-Commerce site that featured a dynamically rendered product page. The full-page included an interface for a product overview, related products, questions and answers, and user reviews. The front-end was built for an existing back-end (Atelier API and database). Note: Access to Atelier database ends June 7th, see images below.


## Tabel Of Contents
- [Site Features](#site-features)
  - [Product Overview](#prodcut-overview)
  - [Ratings and Reviews](#ratings-and-reviews)
- [Installation and Development](#installation-and-development)
  - [Pre Installation Requirements](pre-instillation-requirments)
  - [Environment Variables](#environment-variables)
  - [Installation and Setup](#installation-and-setup)
- [Contributors](#contributors)

## Site Features

### PRODUCT OVERVIEW

![ezgif com-gif-maker](https://user-images.githubusercontent.com/93607280/172023634-c50acbfd-c11e-43e6-9ed5-badc9f2bfacb.gif)


### Ratings and Reviews
Write a Review

More Reviews
![moreReviews](https://user-images.githubusercontent.com/97041979/172052084-a9decade-2762-4fde-bea9-0dca5ceee4d9.gif)

Toggle 'See More/Less'
![seeMore](https://user-images.githubusercontent.com/97041979/172051692-1b8ff865-6fc6-40fe-a31a-b5d0df976541.gif)

Vote Helpful
![voteHelpful](https://user-images.githubusercontent.com/97041979/172052079-9ed4d05b-d224-40a7-8489-5e0a9f232e5d.gif)

Report

Sort by Newest, Helpful, Relevance
![sort](https://user-images.githubusercontent.com/97041979/172051492-edc55a4f-1b95-4040-ade4-cfa0902bb8f9.gif)

Additive Star Filtration
![starFiltering](https://user-images.githubusercontent.com/97041979/172051384-d11a0fc8-fac1-41f2-b26f-b10031d12aff.gif)

Mobile View
![mobileViewSquare](https://user-images.githubusercontent.com/97041979/172023010-fb962a66-3d8e-4c4d-ad1b-c9313117b1c4.gif)

## Installation and Development

### Pre Instillation Requirments
```
node v16.15.0
npm v8.5.5
```
## Environment Variables
PiGiza uses [dotenv](https://www.npmjs.com/package/dotenv)

Update the Port and Auth variables in the `example.env`file found in the main directory. Make sure the AUTH variable is updated with your GITHUB token. When variables are updated remove example from the name and save the file as `.env`

## Installation and Setup 

From the root directory, run the following installation and setup commands in your termanl
1. Install dependencies"
  ```npm install```
2. Initalize Webpack and Bundle:
  ```npm run client-dev```
3. Start Development Server:
  ```npm run server-dev```


## Contributors
- Sonia Ann Friscia: Reviews
- Yuki Ogawa : Related Products
- Levi Walker: Overview
- Jake Reid: Questions and Answers
