import React from 'react';

const withLabeledItemData = (Component) => ({ product, onAddToCart }) => {
    const label = product.name || product.title || 'Unnamed';
    const onAdd = () => onAddToCart(product);
    return <Component name={label} price={product.price} onAdd={onAdd} />;
};

export default withLabeledItemData;
