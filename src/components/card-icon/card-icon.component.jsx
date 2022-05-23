import {CartIconContainer, ItemCount, ShoppingIcon} from "./card-icon.styles.jsx";
import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount} = useContext(CartContext);


  const toggleIsCartOpen = () => {
      setIsCartOpen(!isCartOpen);
  }

  return (
      <CartIconContainer onClick={toggleIsCartOpen}>
          <ShoppingIcon className="shopping-icon"/>
          <ItemCount className="item-count">
            {cartCount}
          </ItemCount>
      </CartIconContainer>
  )
}

export default CartIcon;