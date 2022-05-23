import Button from "../button/button.component";
import "./card-dropdown.styles.scss";
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
        <div className="cart-dropdown-container">
            <div className="cart-items" >
                {cartItem.map(item => <CartItem cartItem={item}></CartItem>)}
            </div>
            <Button buttonType='inverted' onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
        </div>
    )
}

export default CartDropdown;