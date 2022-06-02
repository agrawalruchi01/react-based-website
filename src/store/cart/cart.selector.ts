import { createSelector } from "reselect";
import { RootState } from "../store";
import { CartState } from "./cart.reducer";
import { CartItem } from "./cart.types";

const selectCartReducer = (state: RootState) : CartState => state.cart;

export const selectCartItems = createSelector(
    [selectCartReducer],
    (cart) => cart.cartItems,
);

export const selectIsCartOpen  = createSelector(
    [selectCartReducer],
    (cart) => cart.isCartOpen,
);


export const selectCartTotal = createSelector(
    [selectCartReducer],
    (cart) => { return ((cart && cart.cartItems) || []).reduce((total : number, cardItem: CartItem) => 
    total + cardItem.price * cardItem.quantity, 0) }
)

export const selectCartCount = createSelector(
    [selectCartReducer],
    (cart) => ((cart && cart.cartItems) || []).reduce((total, cardItem) => 
    total + cardItem.quantity, 0)
)

