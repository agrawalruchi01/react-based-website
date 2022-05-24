import { createContext, useReducer} from "react";
import { createAction } from "../utils/reducer/reducer.utils";

const INITIAL_STATE = {
    cartItem: [],
    isCartOpen: false,
    cartCount: 0,
    cartTotal: 0,
}

const CART_ACTION_TYPES = {
    'SET_CART_ITEMS': 'SET_CART_ITEMS',
    'SET_IS_CART_OPEN': 'SET_IS_CART_OPEN'
}

const cartReducer = (state, action) => {
    const {type, payload} = action;

    switch(type) {
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return {...state, ...payload};
        case CART_ACTION_TYPES.SET_IS_CART_OPEN:
            return {...state,
                    isCartOpen: payload}
        default:
            throw new Error(`Unhandled type ${type} in cart reducer`)
    }
}

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

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () =>{},
    cartItem: [],
    addItemToCart: () => {},
    cartCount: 0,
    removeItemFromCart: () => {},
    clearCardItemFromCart:()=>{},
    cartTotal: 0,
});

export const CartProvider = ({ children }) => {

    const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE); 
    const { cartItem, cartCount, cartTotal, isCartOpen} = state;
    
    const updateCardItemsReducer = (newCartItems) => {
        const newCartTotal = newCartItems.reduce((total, cardItem) => total+cardItem.price*cardItem.quantity , 0);
        const newCartCount = newCartItems.reduce((total, cardItem) => total+cardItem.quantity, 0);

        dispatch(createAction(CART_ACTION_TYPES.SET_CART_ITEMS,
                   {
                    cartItem: newCartItems,
                    cartCount: newCartCount,
                    cartTotal: newCartTotal
                  }));

    }

    const addItemToCart = ( productToAdd) => {
       const newCartItem  = addCartItem(cartItem, productToAdd);
       updateCardItemsReducer(newCartItem);
    }

    const removeItemFromCart = (itemToRemove) => {
        const newCartItem  = removeCartItem(cartItem, itemToRemove);
        updateCardItemsReducer(newCartItem);
    }

    const clearCardItemFromCart = (item) => {
        const newCartItem  =clearCardItem(cartItem, item);
        updateCardItemsReducer(newCartItem);
    }

    const setIsCartOpen = (isCartOpen) =>{
         dispatch(createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, isCartOpen));
    }
    const value = {isCartOpen, setIsCartOpen , addItemToCart, cartItem, cartCount ,cartTotal, 
         removeItemFromCart, clearCardItemFromCart};


    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}