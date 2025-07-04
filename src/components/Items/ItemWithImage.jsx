// ./src/components/Items/ItemWithImage.jsx
import React from 'react';
import styles from './Items.module.css';

const ItemWithImage = ({ name, price, image, onAdd }) => (
    <div className={styles.itemWithImage}>
        <img src={image} alt={name} className={styles.image} />
        <div className={styles.info}>
            <span>{name} – {price}€</span>
            <button onClick={() => onAdd({ name, price, image })}>Add</button>
        </div>
    </div>
);

export default ItemWithImage;
