const withLocalStorage = (Component) => (props) => {
    const [items, setItems] = useLocalStorage('cart-items', []);
    return <Component {...props} items={items} onRemove={(i) => {
        const updated = items.filter((_, idx) => idx !== i);
        setItems(updated);
    }} />;
};

export default withLocalStorage;