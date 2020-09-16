import React from 'react';
import './Checkout.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
    selectCartItems,
    selectCartTotalPrice,
} from '../../store/reducers/cartSelectors';

import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';
import StripeCheckoutButton from '../../components/StripeButton/StripeButton';

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
                <span>
                    TOTAL PRICE: {'$'}
                    {totalPrice}
                </span>
            </div>
            <div className="test-warning">
                *Please use the following test credit cart for payments*
                <br />
                4242 4242 4242 4242 - Exp: 02/20 - CVV: 123
            </div>
            <StripeCheckoutButton price={totalPrice} />
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    totalPrice: selectCartTotalPrice,
});

export default connect(mapStateToProps)(CheckoutPage);
