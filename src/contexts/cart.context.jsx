import { createContext, useState, useEffect } from "react";

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

const updateCartCount = (cardItems) => {
    return cardItems.reduce((total, cardItem) => total+cardItem.quantity , 0);
}

const updateCardTotal = (cardItem) => {
    return cardItem.reduce((total,cardItem) => total+cardItem.price*cardItem.quantity, 0)
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
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItem, setCartItem] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    
    const addItemToCart = ( productToAdd) => {
        setCartItem(addCartItem(cartItem, productToAdd));
    }

    const removeItemFromCart = (itemToRemove) => {
        setCartItem(removeCartItem(cartItem, itemToRemove))
    }

    const clearCardItemFromCart = (item) => {
        setCartItem(clearCardItem(cartItem, item));
    }
  
     useEffect(() => {setCartCount(updateCartCount(cartItem
        ))}, [cartItem]);

        useEffect(() => {setCartTotal(updateCardTotal(cartItem
            ))}, [cartItem]);

    const value = {isCartOpen, setIsCartOpen , addItemToCart, cartItem, cartCount ,cartTotal, 
         removeItemFromCart, clearCardItemFromCart};


    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}