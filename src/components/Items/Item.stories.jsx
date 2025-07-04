// ./src/components/Items/Item.stories.jsx
import React from 'react';
import { Item } from '.';

export default {
    title: 'Items/Item',
    component: Item,
};

export const Default = {
    render: () => (
        <Item
            name="Apple"
            price={1}
            onAdd={(item) => console.log('Add', item)}
        />
    ),
};
