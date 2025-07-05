// ./src/components/Items/Item.jsx
import React from 'react';
import styles from './Items.module.css';

const Item = ({ name, price, onAdd }) => (
    <div className={styles.item}>
        <span>{name} – {price}€</span>
        <button onClick={onAdd}>Add</button>
    </div>
);

export default Item;
