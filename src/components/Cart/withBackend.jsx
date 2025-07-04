const withBackend = (Component) => (props) => {
    const [items, setItems] = useRemoteCart(); // your custom hook
    return <Component {...props} items={items} onRemove={removeItemFromBackend} />;
};

export default withBackend;