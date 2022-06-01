/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import 'regenerator-runtime';
import ExampleComponent from './ExampleComponent.jsx';

it('should render component', () => {
  let { getByTestId } = render(<ExampleComponent />);
  expect(getByTestId('text')).toHaveTextContent('some text');
})