import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cartIcon.scss';
import { connect } from 'react-redux';
import { toggleHidden } from '../../store/actions/actionCreatores';
import { selectCartItemsCount } from '../../store/reducers/cartSelectors';
const CartIcon = ({ toggleHidden, itemsQuantity }) => (
    <div className="cart-icon" onClick={toggleHidden}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">{itemsQuantity}</span>
    </div>
);

const mapStateToProps = (state) => {
    console.log('called');
    return {
        itemsQuantity: selectCartItemsCount(state),
    };
};

const mapDispatchToProps = { toggleHidden };
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
