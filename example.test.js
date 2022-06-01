/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import 'regenerator-runtime';
import ExampleComponent from './ExampleComponent.jsx';

describe('example component', () => {

  it('should have text', () => {
    let { getByTestId } = render(<ExampleComponent />);
    expect(getByTestId('text')).toHaveTextContent('some text');
  });

  it('should change text when button clicked', () => {
    let { getByTestId } = render(<ExampleComponent />);

    fireEvent.click(getByTestId('button'));

    expect(getByTestId('text')).toHaveTextContent('some more text');
  });

  if('should change text when async button clicked', async () => {
    let {getByTestId } = render(<ExampleComponent />);

    await fireEvent.click(getByTestId('async-button'));

    expect(getByTestId('text')).toHaveTextContent('some even more text');
  });
});