import React from 'react';

const LocalStorageDecorator = (Story, context) => {
    const prefix = context?.parameters?.localStoragePrefix || '';
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
