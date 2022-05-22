import Button from "../button/button.component";
import "./card-dropdown.styles.scss";
import { useContext, useEffect } from "react";
import { CartDropDownContext } from "../../contexts/cart.context";

const CartDropdown = () => {
  return (
      <div className="cart-dropdown-container">
            <div className="cart-items" >
              <Button buttonType='inverted' >GO TO CHECKOUT</Button>
            </div>
      </div>
  )
}

export default CartDropdown;