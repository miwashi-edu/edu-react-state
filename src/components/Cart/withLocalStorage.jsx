// ./src/components/Cart/withLocalStorage.jsx
import React, { useState, useEffect } from 'react';

const withLocalStorage = (Component) => (props) => {
    const key = 'cart-items';
    const [items, setItems] = useState([]);
    const [open, setOpen] = useState(false);

    // Initial load from localStorage
    useEffect(() => {
        try {
            const stored = localStorage.getItem(key);
            setItems(stored ? JSON.parse(stored) : []);
        } catch {
            setItems([]);
        }
    }, []);

    // Write to localStorage when items change
    useEffect(() => {
        try {
            localStorage.setItem(key, JSON.stringify(items));
        } catch {}
    }, [items]);

    // Periodic sync from localStorage (every second)
    useEffect(() => {
        const interval = setInterval(() => {
            try {
                const stored = localStorage.getItem(key);
                const parsed = stored ? JSON.parse(stored) : [];
                if (JSON.stringify(parsed) !== JSON.stringify(items)) {
                    setItems(parsed);
                }
            } catch {}
        }, 1000);
        return () => clearInterval(interval);
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
