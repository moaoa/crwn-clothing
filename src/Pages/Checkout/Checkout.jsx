import React from 'react';
import './Checkout.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
    selectCartItems,
    selectCartTotalPrice,
} from '../../store/reducers/cartSelectors';

import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';

const CheckoutPage = ({ cartItems, totalPrice }) => {
    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {cartItems.map((item) => (
                <CheckoutItem cartItem={item} key={item.id} />
            ))}
            <div className="total">
                <span>TOTAL PRICE: {totalPrice}</span>
            </div>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    totalPrice: selectCartTotalPrice,
});

export default connect(mapStateToProps)(CheckoutPage);
