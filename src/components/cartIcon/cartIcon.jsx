import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cartIcon.scss';
import { connect } from 'react-redux';
import { toggleHidden } from '../../store/actions/actionCreatores';
const CartIcon = ({ toggleHidden }) => (
    <div className="cart-icon" onClick={toggleHidden}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">0</span>
    </div>
);

const mapDispatchToProps = { toggleHidden };
export default connect(null, mapDispatchToProps)(CartIcon);
