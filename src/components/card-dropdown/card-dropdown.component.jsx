import Button, {BUTTN_TYPE_CLASSES} from "../button/button.component";
import {CartDropDownContainer, EmptyMessageContainer, CartItems} from "./card-dropdown.styles.jsx";
import CartItem from "../cart-item/cart-item.component";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context"
import { useNavigate } from "react-router-dom";


const CartDropdown = () => {
    const { cartItem } = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate("/checkout");
    }

    return (
        <CartDropDownContainer>
            {cartItem.length ?
            (<CartItems > 
                {cartItem.map(item => <CartItem cartItem={item}></CartItem>)}
            </CartItems>) : <EmptyMessageContainer> "Cart is Empty" </EmptyMessageContainer>}
            <Button buttonType={BUTTN_TYPE_CLASSES.base} onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
        </CartDropDownContainer>
    )
}

export default CartDropdown;