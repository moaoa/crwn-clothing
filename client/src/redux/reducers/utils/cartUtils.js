export const addItem = (cartItems, cartItemToAdd) => {
    const targetedItemExists = cartItems.find(
        (item) => cartItemToAdd.id === item.id
    );
    if (targetedItemExists) {
        return cartItems.map((item) => {
            if (item.id === cartItemToAdd.id)
                return { ...item, quantity: item.quantity + 1 };
            return item;
        });
    }
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const decreaseItemQuantity = (cartItems, cartItemId) => {
    const targetedItem = cartItems.find((item) => item.id === cartItemId);

    if (targetedItem.quantity === 1) {
        return cartItems.filter((item) => item.id !== cartItemId);
    }

    return cartItems.map((item) => {
        if (item.id === cartItemId) {
            return { ...item, quantity: item.quantity - 1 };
        }
        return item;
    });
};
