import React from 'react';

const withImageItemData = (Component) => ({ product, onAddToCart }) => {
    const { name, price, image } = product;
    const onAdd = () => onAddToCart(product);
    return <Component name={name} price={price} image={image} onAdd={onAdd} />;
};

export default withImageItemData;
