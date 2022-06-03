/**
 * @jest-environment jsdom
 */

 import React from 'react';
 import regeneratorRuntime from "regenerator-runtime";
 import { render, screen, cleanup } from '@testing-library/react';
//  import App from '../App.jsx'
 import Footer from './Footer';

 //describe('');
 it('should have the right message in the dom', async () => {
   var product =     {
     "id": 37311,
     "campus": "hr-rfe",
     "name": "Camo Onesie",
     "slogan": "Blend in to your crowd",
     "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
     "category": "Jackets",
     "default_price": "140.00",
     "created_at": "2021-08-13T14:37:33.145Z",
     "updated_at": "2021-08-13T14:37:33.145Z"
    }   
  render(<Footer products={product}/>)

  const message = 'Blend in to your crowd';

  expect(await screen.getByText(message)).toBeInTheDocument()
})