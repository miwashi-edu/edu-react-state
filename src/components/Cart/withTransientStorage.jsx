import React, { useState } from 'react';

const withTransientStorage = (Component) => (props) => {
    const [items, setItems] = useState([]);

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
        />
    );
};

export default withTransientStorage;
