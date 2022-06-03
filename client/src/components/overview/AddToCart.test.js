/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import AddToCart from './AddToCart';
 
 describe('Add To Cart Should have Size and Quantity drop downs', () => {
  afterAll(() => {
    cleanup();
  });
  let skus =[
    {size: 'Select a Size'},
    {quantity: 8, size: 'XS', id: '1281032'},
    {quantity: 16, size: 'S', id: '1281033'},
    {quantity: 17, size: 'M', id: '1281034'},
    {quantity: 10, size: 'L', id: '1281035'},
    {quantity: 15, size: 'XL', id: '1281036'},
    {quantity: 4, size: 'XL', id: '1281037'}
  ]

  render(<AddToCart skus={skus}/>);
 
  it('Should find S size option ', async () => {
    const select = screen.getByTestId("size");
    expect(await screen.findByRole('option', {name: 'S'})).toBeInTheDocument()
  });
  
  it('Should select the S option', () => {
    fireEvent.change(screen.getByTestId('size'), {target: {value: '2'}}); //Two is small index
    let options = screen.getAllByTestId('select-option');
    expect(options[0].selected).toBeFalsy();
    expect(options[1].selected).toBeFalsy();
    expect(options[2].selected).toBeTruthy();
  });
  
  it('Should find quantity 1 option ', async () => {
    const select = screen.getByTestId("quantity");
    expect(await screen.findByRole('option', {name: '1'})).toBeInTheDocument()
  });

  it('Should select the S option', () => {
    fireEvent.change(screen.getByTestId('quantity'), {target: {value: '1'}}); //Two is small index
    let options = screen.getAllByTestId('select-quantity');
    expect(options[0].selected).toBeTruthy();
    expect(options[1].selected).toBeFalsy();
    expect(options[2].selected).toBeFalsy();
  });

  it('Should have add to bag button ', async () => {
    const message = 'Add to Bag';
    expect(await screen.getByText(message)).toBeInTheDocument()
    // const button = screen.getByRole("button");
    // expect(await screen.findByRole('option', {name: '1'})).toBeInTheDocument()
  });

  it('Should have add to stuff to bag ', async () => {
    const button = screen.getByTestId("add");
    fireEvent.click(button)
  });

});