// components/CardPaymentForm.js
import {React, useState} from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
const CardPaymentForm = () => {
  const [showPaymentSuccess, setShowPaymentSuccess] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { token, error } = await stripe.createToken(cardElement);

    if (error) {
      console.error(error);
      // Handle error, e.g., display error message to the user
    } else {
      // Send the token to your server for processing
      console.log("Stripe Token:", token);
      // Implement your server-side logic to process the payment
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* <CardElement id="cardElement" options={{ style: { base: { fontSize: '2vmin' } } }} /> */}
      <button
        type="submit"
        style={{
          backgroundColor: "#4CAF50",
          color: "white",
          border: "0",
          padding: "1vmin 2vmin",
          marginTop: "1vmin",
          cursor: "pointer",
        }}
      >
        Pay with Card
      </button>
    </form>
  );
};

export default CardPaymentForm;
