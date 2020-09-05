import * as actionTypes from '../actions/actionTypes';
import { addItem } from './utils/cartUtils';
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

        default:
            return state;
    }
};

export default CartReducer;
