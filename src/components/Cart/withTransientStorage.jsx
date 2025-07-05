import React, { useState } from 'react';

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
