import { ActionWithPayload, createAction, withMatcher } from "../../utils/reducer/reducer.utils"
import { CategoryItem } from "../categories/category.types";
import { CartItem, CART_ACTION_TYPES } from "./cart.types";

const addCartItem = (cardItems: CartItem[], productToAdd: CategoryItem) : CartItem[] => {
    let cartItemExist = cardItems.find((item => item.id === productToAdd.id));
     
    if (cartItemExist) {
        return cardItems.map((cartItem) => 
            (cartItem.id  === productToAdd.id) ?
               {...cartItem,quantity: cartItem.quantity+1} :
               cartItem);  
        }

    return [...cardItems,{...productToAdd, quantity:1}]
}

const removeCartItem = (cardItems: CartItem[], cartItemtoRemove: CategoryItem) : CartItem[] => {
    let existingCartItem  = cardItems.find((item => item.id === cartItemtoRemove.id));

    if (existingCartItem && existingCartItem!==undefined && existingCartItem.quantity === 1) {
        return cardItems.filter(item => existingCartItem && item.id !== existingCartItem.id);
    }

    return cardItems.map(item => item.id === cartItemtoRemove.id? 
        {...item, quantity:item.quantity-1}
        :item)
}

const clearCardItem = (cardItems : CartItem[], cartItemtoRemove: CategoryItem) => {
        return cardItems.filter(item => item.id !== cartItemtoRemove.id);
}

export type SetIsCartOpen = ActionWithPayload<CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean>;
export type SetCartItem = ActionWithPayload<CART_ACTION_TYPES.SET_CART_ITEMS, CartItem[]>;

export const setCartItems = withMatcher((cartItems: CartItem[]) : SetCartItem => 
    createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems)) 

export const setIsCartOpen = withMatcher((cartOpen: boolean) : SetIsCartOpen => {
  return createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, cartOpen);
})

export const addItemToCart = (cartItems: CartItem[], productToAdd: CategoryItem) => {
    const newCartItem  = addCartItem(cartItems, productToAdd);
    return setCartItems(newCartItem);
 }

 export const removeItemFromCart = (cartItems: CartItem[], itemToRemove: CategoryItem) => {
     const newCartItem  = removeCartItem(cartItems, itemToRemove);
     return setCartItems(newCartItem);
 }

 export const clearCardItemFromCart = (cartItems: CartItem[],item: CategoryItem) => {
     const newCartItem=clearCardItem(cartItems, item);
     return setCartItems(newCartItem);
 }
