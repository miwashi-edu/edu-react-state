import Cart from './Cart';

const CART_KEY = 'cart-items';
import withTestStorage from './withTestStorage';
import withTransientStorage from './withTransientStorage';
import withBackend from './withBackend';
import withLocalStorage from './withLocalStorage';


const CartWithTransientStorage = withTransientStorage(Cart);
const CartWithBackend = withBackend(Cart);
const CartWithLocalStorage = withLocalStorage(Cart);
const CartWithTestStorage = withTestStorage(Cart);

export {
    CART_KEY,
    CartWithTestStorage as Cart,
    CartWithBackend,
    CartWithLocalStorage,
    CartWithTransientStorage,
    CartWithTestStorage
};
