import React from 'react';
import './CartDropDown.scss';
import CustomButton from '../CustomButton/CustomButton';

function CartDropDown() {
    return (
        <div className="cart-dropdown">
            <div className="cart-items"></div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    );
}

export default CartDropDown;
