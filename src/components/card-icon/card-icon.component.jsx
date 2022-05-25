import {CartIconContainer, ItemCount, ShoppingIcon} from "./card-icon.styles.jsx";
import { useSelector, useDispatch } from "react-redux";
import { selectCartCount, selectIsCartOpen } from "../../store/cart/cart.selector.js";
import { setIsCartOpen } from "../../store/cart/cart.action.js";

const CartIcon = () => {
   const cartCount = useSelector(selectCartCount);
   const isCartOpen= useSelector(selectIsCartOpen)

   const dispatch = useDispatch();

  const toggleIsCartOpen = () => {
      dispatch(setIsCartOpen(!isCartOpen));
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