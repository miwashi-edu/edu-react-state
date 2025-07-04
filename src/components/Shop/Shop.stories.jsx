import React from 'react';
import Shop from './Shop';
import Cart from '../Cart';
import { Item } from '../Items';

export default {
  title: 'Components/Shop',
  component: Shop,
};

export const Default = {

};

export const WithCart = {
  decorators: [
    (Story) => <Cart><Story /></Cart>
  ],
};

export const WithItem = {
  render: () => (
      <Shop>
        <Item name="Apple" price={1} onAdd={() => {}} />
      </Shop>
  ),
};