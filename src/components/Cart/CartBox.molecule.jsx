import React from 'react';
import CartItem from "./CartItem.molecule.jsx";
import styles from './Cart.module.css';

const CartBox = ({ items, onRemove, onClose }) => (
    <div className={styles.cartBox}>
        <h2>Cart</h2>
        <ul className={styles.list}>
            {items.map((item, index) => (
                <CartItem key={index} item={item} index={index} onRemove={onRemove} />
            ))}
        </ul>
        <button onClick={onClose} className={styles.close}>✖</button>
    </div>
);

export default CartBox;