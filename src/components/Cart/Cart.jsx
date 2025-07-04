import React, { useState } from 'react';
import styles from './Cart.module.css';

const Cart = ({ children, items = [], onRemove }) => {
    const [open, setOpen] = useState(false);

    return (
        <div className={styles.wrapper}>
            {children}

            {!open ? (
                <button onClick={() => setOpen(true)} className={styles.cartIcon}>
                    🛒
                </button>
            ) : (
                <div className={styles.cartBox}>
                    <h2>Cart</h2>
                    <ul className={styles.list}>
                        {items.map((item, index) => (
                            <li key={index} className={styles.item}>
                                {item.name} – {item.price}€
                                <button onClick={() => onRemove(index)} className={styles.remove}>
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>
                    <button onClick={() => setOpen(false)} className={styles.close}>
                        ✖
                    </button>
                </div>
            )}
        </div>
    );
};

export default Cart;
