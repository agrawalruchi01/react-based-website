import  { useElements, useStripe,CardElement} from "@stripe/react-stripe-js";
import Button, {BUTTN_TYPE_CLASSES} from "../button/button.component";
import {PaymentFormContainer, FormContainer, PaymentButton } from "./payment-form.styles"
import { useSelector } from "react-redux";
import { useState } from "react";

import { selectCartTotal } from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";

const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const currentUser = useSelector(selectCurrentUser);
    const total = useSelector(selectCartTotal);
    const [isProcessingPayment, setIsProcessingPayment] = useState(false);


    const paymentHandler = async(e) => {
       e.preventDefault();
       if (!stripe || !elements) return;

       setIsProcessingPayment(true);

       const response = await fetch('/.netlify/functions/create-payment-intent', {
          method: 'post',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({amount: total+100})}).then(res=>res.json());

      const { paymentIntent: { client_secret }} = response;

      const paymentResult = await stripe.confirmCardPayment(client_secret, {
          payment_method: {
              card: elements.getElement(CardElement),
              billing_details: {
                  name: currentUser? currentUser.displayName :'GUEST',
                  address: {
                    "city": 'SA',
                    "country": 'US',
                    "line1": 'rwerwe',
                    "line2": 'werewr',
                    "postal_code": "44445",
                    "state": 'SA'
                  }
              }
          }
      })

      setIsProcessingPayment(false);
      if(paymentResult.error) {
          alert("Payment Failed 123", paymentResult.error);
      } else {
          if (paymentResult.paymentIntent.status === 'succeeded') {
              alert("payment success");
          }
      }
    }

    return (
        <PaymentFormContainer>
            <FormContainer onSubmit={paymentHandler}>
            <h2>Credit Card Paymnet:</h2>
            <CardElement />
            <PaymentButton isLoading={isProcessingPayment} buttonType={BUTTN_TYPE_CLASSES.inverted}>
                Pay now
            </PaymentButton>
            </FormContainer>
     </PaymentFormContainer>
    )
}

export default PaymentForm;