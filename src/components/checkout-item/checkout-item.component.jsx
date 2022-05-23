import "./checkout-item.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CheckoutItem = ({ cardItem }) => {
    const { imageUrl, name, price, quantity } = cardItem;
    const { addItemToCart, removeItemFromCart, clearCardItemFromCart } = useContext(CartContext);

    const clearCartHandler = () => {
        console.log("clear carrt ite,")
        clearCardItemFromCart(cardItem);
    }

    const removeItemHandler =() => {
        removeItemFromCart(cardItem);
    }

    const addItemHandler = () => {
       addItemToCart(cardItem);
    }

    return <div className="checkout-item-container">
        <div className="image-container">
            <img src={imageUrl} alt={`${name}`} />
        </div>
        <span className="name">{name}</span>
        <span className="quantity">
            <div className="arrow" onClick={removeItemHandler}>
                &#10094;
            </div>
            <span className="value"> {quantity}</span>
            <div className="arrow" onClick={addItemHandler}>
                &#10095;
            </div>
            </span>
        <span className="price">{price}</span>
        <div className="remove-button" onClick={clearCartHandler}>&#10005;</div>
    </div>
}

export default CheckoutItem;