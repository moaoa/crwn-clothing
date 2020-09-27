import React from 'react';
import './CartDropDown.scss';
import CustomButton from '../CustomButton/CustomButton';
import CartItem from '../CartItem/CartItem';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/selectors/cartSelectors';
import { useHistory } from 'react-router-dom';
import { toggleHidden } from '../../redux/actions/actionCreatores';

function CartDropDown({ cartItems, dispatch }) {
    const history = useHistory();
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {cartItems.length ? (
                    cartItems.map((item) => (
                        <CartItem key={item.id} item={item} />
                    ))
                ) : (
                    <span className="empty-message">Your cart is empty</span>
                )}
            </div>
            <CustomButton
                onClick={() => {
                    history.push('/checkout');
                    dispatch(toggleHidden());
                }}
            >
                GO TO CHECKOUT
            </CustomButton>
        </div>
    );
}

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CartDropDown);
