/**
 * @jest-environment jsdom
 */

import React from 'react';
import "regenerator-runtime";
import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import InfoBox from './InfoBox';

describe('Info Box and Footer', () => {
let product = {
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

it('Should get meta info', async () => {

  render(<InfoBox products={product} />);

  const message = 'Camo Onesie';

  expect(await screen.getByText(message)).toBeInTheDocument()
});

it('Should have the right message in the footer', async () => {
  render(<Footer products={product}/>);

  const message = 'Blend in to your crowd';

  expect(await screen.getByText(message)).toBeInTheDocument()
})

});