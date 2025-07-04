// ./src/components/Items/ItemWithImage.stories.jsx
import React from 'react';
import { ItemWithImage } from '.';

export default {
    title: 'Items/ItemWithImage',
    component: ItemWithImage,
};

export const Default = {
    render: () => (
        <ItemWithImage
            name="Strawberry"
            price={3}
            image="/images/strawberry.jpg"
            onAdd={(item) => console.log('Add', item)}
        />
    ),
};
