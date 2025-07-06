import React from 'react';
import styles from './Cart.module.css';

const CartButton = ({ count, onClick }) => (
    <button onClick={onClick} className={styles.cartIcon}>
        🛒 {count > 0 && <span className={styles.count}>({count})</span>}
    </button>
);

export default CartButton;