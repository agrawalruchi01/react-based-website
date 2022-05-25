import "./checkout-item.styles.scss";
import { addItemToCart, clearCardItemFromCart, removeItemFromCart } from "../../store/cart/cart.action";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";

const CheckoutItem = ({ cardItem }) => {
    const dispatch = useDispatch()
    const { imageUrl, name, price, quantity } = cardItem;
    const cardItems =  useSelector(selectCartItems);
    console.log("cardItems: ", cardItems);

    const clearCartHandler = () => {
        dispatch(clearCardItemFromCart(cardItems, cardItem));
    }

    const removeItemHandler =() => {
        dispatch(removeItemFromCart(cardItems, cardItem));
    }

    const addItemHandler = () => {
       dispatch(addItemToCart(cardItems,cardItem));
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