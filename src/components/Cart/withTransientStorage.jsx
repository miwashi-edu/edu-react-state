import React, { useState } from 'react';

/**
 * Higher-Order Component that adds transient (in-memory) cart storage to a component.
 *
 * @function
 * @param {React.ComponentType} Component - The component to wrap (typically `Cart`).
 * @returns {React.FC} - A new component with injected cart behavior.
 *
 * Injected props:
 * - `items`: array of cart items
 * - `onAddToCart(item)`: adds item to cart
 * - `onRemove(index)`: removes item at index
 * - `open`: cart visibility boolean
 * - `setOpen(boolean)`: cart visibility setter
 */
const withTransientStorage = (Component) => (props) => {
    const [items, setItems] = useState([]);
    const [open, setOpen] = useState(false);

    const onRemove = (index) => {
        setItems((prev) => prev.filter((_, i) => i !== index));
    };

    const onAdd = (item) => {
        setItems((prev) => [...prev, item]);
    };

    return (
        <Component
            {...props}
            items={items}
            onAddToCart={onAdd}
            onRemove={onRemove}
            open={open}
            setOpen={setOpen}
        />
    );
};

export default withTransientStorage;
