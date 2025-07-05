import React, { useState } from 'react';
import styles from './Cart.module.css';

const Cart = ({ children, items = [], onRemove, open: controlledOpen, setOpen: setControlledOpen }) => {
    const isControlled = controlledOpen !== undefined && setControlledOpen !== undefined;
    const [uncontrolledOpen, setUncontrolledOpen] = useState(false);

    const open = isControlled ? controlledOpen : uncontrolledOpen;
    const setOpen = isControlled ? setControlledOpen : setUncontrolledOpen;

    return (
        <div className={styles.wrapper}>
            {children}
            {!open ? (
                <button onClick={() => setOpen(true)} className={styles.cartIcon}>
                    🛒 {items.length > 0 && <span className={styles.count}>({items.length})</span>}
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
                    <button onClick={() => setOpen(false)} className={styles.close}>✖</button>
                </div>
            )}
        </div>
    );
};

export default Cart;
