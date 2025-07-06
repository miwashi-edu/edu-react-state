import React from 'react';
import styles from './Cart.module.css';

const CartItem = ({ item, index, onRemove }) => (
    <li className={styles.item}>
        {item.name} – {item.price}€
        <button onClick={() => onRemove(index)} className={styles.remove}>
            Remove
        </button>
    </li>
);

export default CartItem;