# PyGiza E-Commerce

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
> This is the first component rendered to the page that a user will see. The Product Overview component gives the views images for the default product as well as the product name, price, style, and sizes.

![ezgif com-gif-maker](https://user-images.githubusercontent.com/93607280/172023634-c50acbfd-c11e-43e6-9ed5-badc9f2bfacb.gif). 


### Ratings and Reviews
The ratings and reviews component comes with a lot of functionality. A user can post a review, add photos, filter and sort current reviews by star amount, and by date added, relevancy or most helpful. Filters are additive, so a user can select more than one. Users can also vote reviews as helpful or report offensive/inappropriate conent which will flag the review and remove it from the stream.

![ezgif com-gif-maker (1)](https://user-images.githubusercontent.com/97041979/177779528-ad333576-a568-4354-9333-532bf98c3eb8.gif)

#### Mobile View
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
  ```
  npm install
  ```
2. Initalize Webpack and Bundle:
  ```
  npm run client-dev
  ```
3. Start Development Server:
  ```
  npm run server-dev
  ```


## Contributors
- Sonia Ann Friscia: Reviews
- Yuki Ogawa : Related Products
- Levi Walker: Overview
- Jake Reid: Questions and Answers
