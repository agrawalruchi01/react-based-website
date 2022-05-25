import { createSelector } from "reselect";

const selectCartReducer = (state) => state.cart;

export const selectCartItems = createSelector(
    [selectCartReducer],
    (cart) => cart.cartItems,
);

export const selectIsCartOpen = createSelector(
    [selectCartReducer],
    (cart) => cart.isCartOpen,
);


export const selectCartTotal = createSelector(
    [selectCartReducer],
    (cart) => { return cart.cartItems.reduce((total, cardItem) => 
    total + cardItem.price * cardItem.quantity, 0) }
)

export const selectCartCount = createSelector(
    [selectCartReducer],
    (cart) => cart.cartItems.reduce((total, cardItem) => 
    total + cardItem.quantity, 0)
)

