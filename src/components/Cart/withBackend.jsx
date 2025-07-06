const withBackend = (Component) => (props) => {
    const [items, setItems] = useRemoteCart();
    return <Component {...props} items={items} onRemove={removeItemFromBackend} />;
};

export default withBackend;