
/**
 * @jest-environment jsdom
 */

import React from 'react';
import regeneratorRuntime from "regenerator-runtime";
import { render, screen, cleanup } from '@testing-library/react';
import App from '../App.jsx'

describe('App component', () => {
  beforeAll(() => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      }))
    });
  });

  
  it('should have the right message in the dom', async () => {
    render(<App />)
    const message = 'Category';

    expect(await screen.getByText(message)).toBeInTheDocument()
  })

  afterAll(cleanup)
});
