import Button, {BUTTN_TYPE_CLASSES} from "../button/button.component";
import {CartDropDownContainer, EmptyMessageContainer, CartItems} from "./card-dropdown.styles.jsx";
import CartItem from "../cart-item/cart-item.component";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectCartItems } from "../../store/cart/cart.selector";


const CartDropdown = () => {
    const  cartItems = useSelector(selectCartItems);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate("/checkout");
    }

    return (
        <CartDropDownContainer>
            {cartItems.length ?
            (<CartItems > 
                {cartItems.map((item, index) => <CartItem cartItem={item} key={index}></CartItem>)}
            </CartItems>) : <EmptyMessageContainer> "Cart is Empty" </EmptyMessageContainer>}
            <Button buttonType={BUTTN_TYPE_CLASSES.base} onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
        </CartDropDownContainer>
    )
}

export default CartDropdown;