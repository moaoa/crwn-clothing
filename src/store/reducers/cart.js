import * as actionTypes from '../actions/actionTypes';
import { addItem, decreaseItemQuantity } from './utils/cartUtils';
const INITIAL_STATE = {
    hidden: true,
    cartItems: [],
};

const CartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.TOGGLE_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden,
            };
        case actionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItem(state.cartItems, action.item),
            };
        case actionTypes.REMOVE_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(
                    (item) => item.id !== action.itemId
                ),
            };
        case actionTypes.DECREASE_ITEM_QUANTITY:
            return {
                ...state,
                cartItems: decreaseItemQuantity(state.cartItems, action.itemId),
            };

        default:
            return state;
    }
};

export default CartReducer;
