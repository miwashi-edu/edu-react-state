import React from 'react';

const LocalStorageDecorator = (Story, context) => {
    const prefix = context?.parameters?.localStoragePrefix || 'cart-items';
    const [_, forceRerender] = React.useState(0); // trigger re-render

    const addTestItem = () => {
        const key = prefix;
        try {
            const existing = JSON.parse(localStorage.getItem(key)) || [];
            const newItem = { id: Date.now(), name: 'Test Item', price: 42 };
            const updated = [...existing, newItem];
            localStorage.setItem(key, JSON.stringify(updated));
        } catch {
            localStorage.setItem(key, JSON.stringify([{ id: 1, name: 'Test Item', price: 42 }]));
        }
        forceRerender(n => n + 1);
    };

    const clearStorage = () => {
        const keysToRemove = [];
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key && key.startsWith(prefix)) {
                keysToRemove.push(key);
            }
        }
        keysToRemove.forEach(key => localStorage.removeItem(key));
        forceRerender(n => n + 1);
    };

    const refreshStorage = () => {
        forceRerender(n => n + 1);
    };

    const entries = [];
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (!prefix || key.startsWith(prefix)) {
            const value = localStorage.getItem(key);
            entries.push({ key, value });
        }
    }

    return (
        <div>
            <Story />
            <div style={{ marginTop: '1rem', padding: '1rem', border: '1px solid #ccc' }}>
                <h3>Local Storage Contents</h3>
                <button onClick={addTestItem}>Add Test Item</button>
                <button onClick={clearStorage} style={{ marginLeft: '0.5rem' }}>Clear</button>
                <button onClick={refreshStorage} style={{ marginLeft: '0.5rem' }}>Refresh</button>
                <ul>
                    {entries.map(({ key, value }) => (
                        <li key={key}>
                            <strong>{key}:</strong> {value}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default LocalStorageDecorator;
