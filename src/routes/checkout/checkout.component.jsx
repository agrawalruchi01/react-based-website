import { useSelector } from "react-redux";
import CheckoutItem
    from "../../components/checkout-item/checkout-item.component";
import PaymentForm from "../../components/payment-form/payment-form.component";
import { selectCartItems, selectCartTotal } from "../../store/cart/cart.selector";

import { CheckoutContainer, CheckoutHeader, HeaderBlock, Total} from "./checkout.styles.jsx";

const Checkout = () => {
    const cartItem = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);

    return <CheckoutContainer>
        <CheckoutHeader>
            <HeaderBlock>
                <span>Product</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Description</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Quantity</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Price</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Remove</span>
            </HeaderBlock>

        </CheckoutHeader>
        {
            cartItem.map(item => {
                return (
                    <CheckoutItem cardItem={item} key={item.id}/>)
            })


        }
        <Total>Total : {cartTotal} </Total>
        <PaymentForm/>
    </CheckoutContainer >
}

export default Checkout;