/**
 * @jest-environment @testing-library/jest-dom
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { screen } from '@testing-library/react';
import CardBtm from './CardBtm';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CardBtm category={'Reeboks'} name={'Apple bottom jeans'} price={45.00} rating={3.25}></CardBtm>), div;
})