import { createSelector } from 'reselect';

// input select
const selectCart = (state) => state.cart;

// output select (uses createSelector)
export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
    [selectCart],
    (cart) => cart.hidden
);

// output select (uses createSelector)
export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItems) =>
        cartItems.reduce(
            (accumalatedQuantity, cartItem) =>
                accumalatedQuantity + cartItem.quantity,
            0
        )
);
