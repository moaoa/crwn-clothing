import React from 'react';
import './CheckoutItem.scss';
import {
    removeItem,
    decreaseItemQuantity,
    addItem,
} from '../../redux/actions/actionCreatores';
import { connect } from 'react-redux';

function CheckoutItem({ cartItem, removeItem, decreaseItemQuantity, addItem }) {
    const { name, imageUrl, price, quantity, id } = cartItem;
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img alt="item" src={imageUrl} />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={() => decreaseItemQuantity(id)}>
                    &#10094;
                </div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={() => addItem(cartItem)}>
                    &#10095;
                </div>
            </span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={() => removeItem(id)}>
                &#10005;
            </div>
        </div>
    );
}
const mapDispatchToProps = {
    removeItem,
    decreaseItemQuantity,
    addItem,
};

export default connect(null, mapDispatchToProps)(CheckoutItem);
