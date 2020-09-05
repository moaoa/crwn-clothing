import * as actionTypes from '../actions/actionTypes';
const INITIAL_STATE = {
    hidden: true,
};

const CartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.TOGGLE_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden,
            };

        default:
            return state;
    }
};

export default CartReducer;
