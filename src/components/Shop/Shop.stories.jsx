import React from 'react';
import { Shop } from '.';
import { CartWithTestStorage, CartWithLocalStorage } from '../Cart';
import { Item } from '../Items';
import {LocalStorageDecorator} from '../../decorators';

export default {
    title: 'Components/Shop',
    component: Shop,
};

export const Default = {
    render: () => <Shop />,
};

export const WithCart = {
    render: () => <CartWithTestStorage><Shop /></CartWithTestStorage>,
};

export const WithItem = {
    render: () => (
        <Shop>
            <Item />
        </Shop>
    ),
};

export const WithCartAndItem = {
    render: () => (
        <CartWithTestStorage>
            <Shop>
                <Item />
            </Shop>
        </CartWithTestStorage>
    ),
};

export const WithCartAndItemLocalStorage = {
    decorators:[LocalStorageDecorator],
    render: () => (
        <CartWithLocalStorage>
            <Shop>
                <Item />
            </Shop>
        </CartWithLocalStorage>
    ),
};

export const WithCartAndItemTestStorage = {
    render: () => (
        <CartWithTestStorage>
            <Shop>
                <Item />
            </Shop>
        </CartWithTestStorage>
    ),
};