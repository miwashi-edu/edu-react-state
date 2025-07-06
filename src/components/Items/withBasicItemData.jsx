import React from 'react';

const withBasicItemData = (Component) => ({ product, onAddToCart }) => {
    const { name, price } = product;
    const onAdd = () => onAddToCart(product);
    return <Component name={name} price={price} onAdd={onAdd} />;
};

export default withBasicItemData;
