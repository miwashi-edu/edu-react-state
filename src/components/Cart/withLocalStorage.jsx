import React, { useEffect, useState } from 'react';

const withLocalStorage = (Component) => (props) => {
    const key = 'cart-items';
    const [items, setItems] = useState(() => {
        try {
            const stored = localStorage.getItem(key);
            return stored ? JSON.parse(stored) : [];
        } catch {
            return [];
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem(key, JSON.stringify(items));
        } catch {
            // ignore write errors
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
        />
    );
};

export default withLocalStorage;
