import React, { useEffect, useState } from 'react';

const withLocalStorage = (Component) => (props) => {
    const key = 'cart-items';
    const [items, setItems] = useState([]);
    const [open, setOpen] = useState(false);

    // Read from localStorage only when opening
    useEffect(() => {
        if (open) {
            try {
                const stored = localStorage.getItem(key);
                setItems(stored ? JSON.parse(stored) : []);
            } catch {
                setItems([]);
            }
        }
    }, [open]);

    // Sync to localStorage on change
    useEffect(() => {
        try {
            localStorage.setItem(key, JSON.stringify(items));
        } catch {
            // ignore
        }
    }, [items]);

    const handleRemove = (index) => {
        setItems((prev) => prev.filter((_, i) => i !== index));
    };

    const handleAdd = (item) => {
        setItems((prev) => [...prev, item]);
    };

    return (
        <Component
            {...props}
            items={items}
            onRemove={handleRemove}
            onAddToCart={handleAdd}
            open={open}
            setOpen={setOpen}
        />
    );
};

export default withLocalStorage;
