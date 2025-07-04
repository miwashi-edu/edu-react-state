import React, { useState } from 'react';
import {CART_KEY, Cart,CartWithLocalStorage, CartWithTestStorage} from '.';
import {LocalStorageDecorator} from '../../decorators';

export default {
  title: 'Components/Cart',
  component: Cart,
};


export const Default = {
}

export const WithTestStorage = {
  render: () => <CartWithTestStorage />,
}

export const WithLocalStorage = {
  render: () => <CartWithLocalStorage />,
  decorators: [LocalStorageDecorator],
  parameters: {
    localStoragePrefix: CART_KEY,
  },
}
