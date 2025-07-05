import React from 'react';
import { CART_KEY, Cart, CartWithLocalStorage, CartWithTestStorage } from '.';
import { LocalStorageDecorator } from '../../decorators';

export default {
  title: 'Components/Cart',
  component: Cart,
  decorators: [],
};

export const Default = {
  render: () => <CartWithTestStorage />,
};

export const WithTestStorage = {
  render: () => <CartWithTestStorage />,
};

export const WithLocalStorage = {
  render: () => <CartWithLocalStorage />,
  decorators: [LocalStorageDecorator],
  parameters: {
    localStoragePrefix: CART_KEY,
  },
};
