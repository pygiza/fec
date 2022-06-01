/**
 * @jest-environment jsdom
 */

import React from 'react';
import reactDOM from 'react-dom';
import regeneratorRuntime from "regenerator-runtime";
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import CardBtm from './CardBtm.jsx';
import App from '../../../App.jsx';
import RelatedProductsContainer from '../../RelatedProductsContainer.jsx';

it('should render component', () => {
  render(<CardBtm category={'clothing'} name={'socks'} price={40.00} rating={2} />);
  // expect(<CardBtm category={'clothing'} name={'socks'} price={40.00} rating={2} />).toBeTruthy();
  expect(screen.getByText('socks')).toBeInTheDocument();
})

// it('Should render component', async () => {
//   render(<App/>);

//   expect(await screen.getByTestId('html-element')).toBeInTheDocument();
//   //data-testid="html-element"
// })
// it('Should render component', async () => {
//   render(<RelatedProductsContainer product_id={37316} renderProduct={() => {}} />);

//   // expect(await screen.getByTestId('html-element')).toBeInTheDocument();
//   //data-testid="html-element"
// })