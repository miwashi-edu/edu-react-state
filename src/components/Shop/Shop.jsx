import React, { useEffect, useState } from 'react';
import styles from './Shop.module.css';
import { Item } from '../Items';

const Shop = ({ onAddToCart }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('/api/products.json')
            .then(res => res.json())
            .then(setProducts)
            .catch(() => setProducts([]));
    }, []);

    return (
        <div className={styles.shop}>
            <h1>Welcome to the Shop</h1>
            <div className={styles.items}>
                {products.map((product) => (
                    <Item key={product.id} {...product} onAdd={onAddToCart} />
                ))}
            </div>
        </div>
    );
};

export default Shop;
