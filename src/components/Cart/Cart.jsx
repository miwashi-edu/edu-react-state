import React, { useState } from 'react';
import styles from './Cart.module.css';
import CartButton from './CartButton.atom';
import CartBox from './CartBox.molecule';

const Cart = ({children, items = [], onRemove, open: controlledOpen, setOpen: setControlledOpen}) => {
    const isControlled = controlledOpen !== undefined && setControlledOpen !== undefined;
    const [uncontrolledOpen, setUncontrolledOpen] = useState(false);

    const open = isControlled ? controlledOpen : uncontrolledOpen;
    const setOpen = isControlled ? setControlledOpen : setUncontrolledOpen;

    return (
        <div className={styles.wrapper}>
            {children}
            {!open ? (
                <CartButton count={items.length} onClick={() => setOpen(true)} />
            ) : (
                <CartBox items={items} onRemove={onRemove} onClose={() => setOpen(false)} />
            )}
        </div>
    );
};

export default Cart;
