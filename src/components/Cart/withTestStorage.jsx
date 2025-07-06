import React, { useState } from 'react';

const withTestStorage = (Component) => (props) => {
    const [items, setItems] = useState([
        { id: 1, name: 'Apple', price: 1 },
        { id: 2, name: 'Banana', price: 2 },
    ]);

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
        >
            {React.Children.map(props.children, (child) =>
                React.isValidElement(child)
                    ? React.cloneElement(child, { onAddToCart: onAdd })
                    : child
            )}
        </Component>
    );
};

export default withTestStorage;
