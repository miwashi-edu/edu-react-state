import Item from './Item';
import withBasicItemData from './withBasicItemData';
import withImageItemData from './withImageItemData';
import withLabeledItemData from './withLabeledItemData';

const ItemWithData = withBasicItemData(Item);
const ItemWithLabel = withLabeledItemData(Item);
const ItemWithImage = withImageItemData(Item);


export {
    Item,
    ItemWithData,
    ItemWithLabel,
    ItemWithImage,
    withImageItemData
};
