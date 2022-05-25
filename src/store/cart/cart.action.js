import { createAction } from "../../utils/reducer/reducer.utils"
import { CART_ACTION_TYPES } from "./cart.types";



const addCartItem = (cardItems, productToAdd) => {
    let cartItemExist = cardItems.find((item => item.id === productToAdd.id));
     
    if (cartItemExist) {
        return cardItems.map((cartItem) => 
            (cartItem.id  === productToAdd.id) ?
               {...cartItem,quantity: cartItem.quantity+1} :
               cartItem);  
        }

    return [...cardItems,{...productToAdd, quantity:1}]
}

const removeCartItem = (cardItems, cartItemtoRemove) => {
    let existingCartItem = cardItems.find((item => item.id === cartItemtoRemove.id));

    if (existingCartItem.quantity === 1) {
        return cardItems.filter(item => item.id !== existingCartItem.id);
    }

    return cardItems.map(item => item.id === cartItemtoRemove.id? 
        {...item, quantity:item.quantity-1}
        :item)
}

const clearCardItem = (cardItems, cartItemtoRemove) => {
        return cardItems.filter(item => item.id !== cartItemtoRemove.id);
}


export const addItemToCart = (cartItem, productToAdd) => {
    const newCartItem  = addCartItem(cartItem, productToAdd);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItem);
 }

 export const removeItemFromCart = (cartItem, itemToRemove) => {
     const newCartItem  = removeCartItem(cartItem, itemToRemove);
     return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItem);
 }

 export const clearCardItemFromCart = (cartItem,item) => {
     const newCartItem  =clearCardItem(cartItem, item);
     return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItem);
 }


export const setIsCartOpen = (cartOpen) => {
   return createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, cartOpen);
}