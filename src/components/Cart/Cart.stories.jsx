import React, { useState } from 'react';
import Cart from './Cart';

export default {
  title: 'Components/Cart',
  component: Cart,
};

const Template = () => {
  const [items, setItems] = useState([
    { name: 'Apple', price: 1 },
    { name: 'Banana', price: 2 },
  ]);

  const handleRemove = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return <Cart items={items} onRemove={handleRemove} />;
};

export const Default = Template.bind({});
