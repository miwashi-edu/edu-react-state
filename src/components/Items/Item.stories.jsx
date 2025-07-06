// ./src/components/Items/Item.stories.jsx
import React from 'react';
import { Item, ItemWithData, ItemWithLabel, withImageItemData } from '.';

export default {
    title: 'Items/Item',
    component: Item,
};

export const Default = {
    render: () => (
        <Item
            name="Apple"
            price={1}
            onAdd={() => console.log('Add Apple')}
        />
    ),
};

export const WithData = {
    render: () => (
        <ItemWithData
            product={{ name: 'Pear', price: 2 }}
            onAddToCart={(item) => console.log('Add', item)}
        />
    ),
};

export const WithLabel = {
    render: () => (
        <ItemWithLabel
            product={{ title: 'Mystery Fruit', price: 3 }}
            onAddToCart={(item) => console.log('Add', item)}
        />
    ),
};

export const WithImage = {
    render: () => {
        const ItemWithImage = withImageItemData(Item);
        return (
            <ItemWithImage
                product={{ name: 'Orange', price: 4, image: '/orange.jpg' }}
                onAddToCart={(item) => console.log('Add', item)}
            />
        );
    },
};
