import * as actionTypes from './actionTypes';
// auth actions
export const setUser = (user) => ({ type: actionTypes.SET_USER, user });

// cart actoins
export const toggleHidden = () => ({ type: actionTypes.TOGGLE_HIDDEN });
export const addItem = (item) => ({ type: actionTypes.ADD_ITEM, item });
export const removeItem = (itemId) => ({
    type: actionTypes.REMOVE_ITEM_FROM_CART,
    itemId,
});

export const decreaseItemQuantity = (itemId) => ({
    type: actionTypes.DECREASE_ITEM_QUANTITY,
    itemId,
});
