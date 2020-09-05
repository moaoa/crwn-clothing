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
