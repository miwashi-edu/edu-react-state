import React, { useEffect, useState } from 'react';
import styles from './Shop.module.css';

const Shop = ({ children, onAddToCart }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('/api/products.json')
            .then((res) => res.json())
            .then(setItems)
            .catch(() => setItems([]));
    }, []);

    if (!items.length) return <div className={styles.empty}>No products available</div>;

    return (
        <div className={styles.shop}>
            <h1 className={styles.header}>Welcome to the Shop</h1>
            <div className={styles.items}>
                {items.map((item, index) => {
                    const label = item.name ?? item.title;
                    if (!label || !React.isValidElement(children)) return null;

                    return (
                        <div key={index} className={styles.itemWrapper}>
                            {React.cloneElement(children, { ...item, onAdd: onAddToCart })}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Shop;
