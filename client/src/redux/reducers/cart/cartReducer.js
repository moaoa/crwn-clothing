import * as actionTypes from '../../actions/actionTypes';
import {
    addItem,
    decreaseItemQuantity,
    setCartItems,
} from '../utils/cartUtils';
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
        case actionTypes.FETCH_CART_ITEMS_SUCCESS:
            return {
                ...state,
                cartItems: setCartItems(action.payload),
            };
        case actionTypes.ADD_ITEM_SUCCESS:
            return {
                ...state,
                cartItems: action.cartItems,
            };
        case actionTypes.REMOVE_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(
                    (item) => item.id !== action.itemId
                ),
            };
        case actionTypes.DECREASE_ITEM_QUANTITY_SUCCESS:
            return {
                ...state,
                cartItems: decreaseItemQuantity(state.cartItems, action.itemId),
            };
        case actionTypes.CLEAR_CART:
            return {
                ...state,
                cartItems: [],
            };

        default:
            return state;
    }
};

export default CartReducer;
