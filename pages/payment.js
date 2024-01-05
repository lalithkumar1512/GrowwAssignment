// pages/payment.js
import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import useOrderStore from "../store/store";
import CardPaymentForm from "./cardpaymentform";
import { useRouter } from "next/router";
const stripePromise = loadStripe("YOUR_STRIPE_PUBLIC_KEY");
import PaymentSuccessPopup from "./paymentsucesspopup";
const PaymentPage = () => {
  const router = useRouter();
  const [showPaymentSuccess, setShowPaymentSuccess] = useState(false);
  const {
    orderamount,
    total,
    payment,
    setPayment,
    merchantMetadata,
    setMerchantMetadata,
  } = useOrderStore();

  const handleBack = () => {
    window.history.back();
  };

  const themeStyles = merchantMetadata?.theme || {};

  // State for UPI payment form
  const [upiDetails, setUpiDetails] = useState({
    upiId: "",
    cardId: "",
    cv: "",
    amount: total,
  });

  const handleUpiSubmit = (event) => {
    event.preventDefault();

    // Validation check for empty UPI ID
    if (!upiDetails.upiId.trim()) {
      alert("UPI ID cannot be empty");
      return;
    }
    setShowPaymentSuccess(true);

    // Handle UPI payment submission logic
    console.log("UPI Details:", upiDetails);
    // Implement UPI payment processing here
  };

  const handleCardSubmit = (event) => {
    event.preventDefault();

    // Validation check for empty UPI ID
    if (!upiDetails.cardId.trim()) {
      alert("Card ID cannot be empty");
      return;
    }
    if (!upiDetails.cv.trim()) {
      alert("CV cannot be empty");
      return;
    }
    setPayment("Card");
    setShowPaymentSuccess(true);

    // Handle UPI payment submission logic
    console.log("UPI Details:", upiDetails);
    // Implement UPI payment processing here
  };

  const handleClosePaymentSuccess = () => {
    // setShowPaymentSuccess(false);

    router.push("/orderconfirmation");
    // You may want to navigate to another page or perform additional actions here
  };

  // Placeholder for CardPaymentForm component

  return (
    <div
      className="payment-container"
      style={{
        backgroundColor: themeStyles["--primary"],
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      {merchantMetadata && (
        <div
          className="theme-layer"
          style={{
            borderRadius: "0.5rem",
            backgroundColor: themeStyles["--foreground"],
            width: "80%",
            padding: "4%",
            margin: "5%",
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
          }}
        >
          <div
            className="merchant-info"
            style={{ display: "flex", alignItems: "center", padding: "3vmin" }}
          >
            <img
              src={merchantMetadata.merchantLogo}
              alt={merchantMetadata.merchantName}
              style={{
                maxWidth: "7vmin",
                maxHeight: "7vmin",
                marginRight: "10px",
              }}
            />
            <h1
              style={{
                margin: "0",
                fontSize: "5vmin",
                color: themeStyles["--background"],
              }}
            >
              {merchantMetadata.merchantName}
            </h1>
          </div>
          <button
            style={{
              maxWidth: "20vmin",
              border: "0",
              backgroundColor: themeStyles["--foreground"],
              color: themeStyles["--background"],
            }}
            onClick={handleBack}
          >
            &laquo;
          </button>
          <h1
            style={{
              margin: "0",
              fontSize: "3.5vmin",
              color: themeStyles["--background"],
              textAlign: "center",
            }}
          >
            Payment
          </h1>

          <div
            className="payment-methods"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: "3vmin",
            }}
          >
            <h2
              style={{
                margin: "0",
                fontSize: "3vmin",
                color: themeStyles["--background"],
              }}
            >
              Choose Payment Method:
            </h2>
            <div
              className="payment-options"
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "2vmin",
                marginTop: "2vmin",
              }}
            >
              {/* Add UPI and Card payment options */}
              <div
                className="upi-option"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around",
                  flex: 1, // Set flex to 1
                  flexGrow: 1, // Set flexGrow to 1
                  marginLeft: "auto",
                }}
              >
                <br></br>
                <img
                  src="data:image/jpeg;base64,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i41VDqbG44UYIG8+MC0GqAcSB4kCEYEZBBHf2Su7nZbPdUrc0EvhZ2lNGFRwql6h/WdQOTpp+rVMfKjbaUkFrQanbi2VKrImcNUUh1tkKjGOLMd39I7TgLKMxpXVgSrKwHEgggeOJGL1xeXiW7MeYWgtwyAkc8ajEU1YjeUUKSRwJIzNflTsqhb2lZreklKrWVbZdA06uddUGQN2d+ckQqYLWU8GU+BBmWRrkvsdKJZvydC1bSqhkZXZx26iFGN4HjmSWQIiICIiAiIgRyryRt2ZzmuqVGLvSWq60HY/qLID29o4GdKnsumtfnwCGFMUQP6VQNqwq9m/HsE6MQOZd7GpVGqOVKvUpGizqcMUPZnvHYZ5bbGpJUSooINOiKCDPVVAQdw7zgb/ADTqRA5VzsanUqVKjF9VSjzBIbGEyxOjuJLHf4TTo8l6a0no85dNTekaOhqpKqhAGEGNxwMZ7pIYgcCz5L0aboxavWNPGgVajOqEDAZUPVBA4HGR2TobU2clxSNKpq0MVJAOCdLBgCe4kDIm/EDn3OzUqVadVtRNLUVXPUDMMa9PawGQD2ZMNs1DcC46wcUzS3HqlSwbeO0g8D5zOhEDjLyfoi2S26/NoytjVvYq+vDn+oFt5HbNs7Np881fSOcZBTL9ukFiFHdvY/Dum9ECNDkjRHN6alzTNKkKKlKhU6Ac4JA3nPyE6dtspErc+C7PzSUcs2rqoSw/yJOSe3dOlEDSTZ9NazVwoFR1CMw4lVJKg+GeM0hydoflTakOaZJY9Yh9RfXq1jB1at+Z2ogcrZWxqdAsymo7vgNUqOz1GC/pGpuCjJ3DdvMx32wKVVq7PzmbiktFyGxhF1dVd3VzqbJ887MQNG72bTqUDQdQ1MroKn9oGBjuI3b/ADT5q7MRqtKodWqiGCDPVGsBSSO04GPWZ0IgcK45No1d64qXVN30aglQqp0DCjAHADPtM9uOTdB1rqwc/mKi1XbV1gyBQhQ/06dC49ffO5EDnWmzFpvVdS+usVZ2JycqoRdO7cABnHeTPm02PSp25oKDoYOGJOXYvnUzN2sSSczpxA4FXkvQZaIBrI1BBTSolRkqhAANLMP1DcNxnlbkvRaktPVcDTV57XzjGqzgYDM7ZJwOA7MDukgiBp7OshRTQHqvvJ1VHLvv7NR7PNNyIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiIH/9k="
                  alt="UPI"
                  style={{
                    width: "10vmin",
                    height: "10vmin",
                    marginBottom: "1vmin",
                    marginLeft: "auto",
                  }}
                />
                {/* <span style={{ color: themeStyles['--background'], fontSize: '2.5vmin' }}>UPI</span> */}
                <h2
                  style={{
                    margin: "0",
                    fontSize: "3vmin",
                    color: themeStyles["--background"],
                    marginLeft: "auto",
                  }}
                >
                  UPI Payment
                </h2>
                <div style={{ display: "flex", flexDirection: "row", width: "50%" }}>
  <form onSubmit={handleUpiSubmit} style={{ marginRight: "auto" }}>
    <label
      htmlFor="upiId"
      style={{
        color: themeStyles["--background"],
        fontSize: "2vmin",
        marginRight: "2vmin",
      }}
    >
      UPI ID:
    </label>
    <br />
    <input
      type="text"
      id="upiId"
      value={upiDetails.upiId}
      maxLength="2vmin"
      onChange={(e) =>
        setUpiDetails({ ...upiDetails, upiId: e.target.value })
      }
      required
      style={{
        marginBottom: "1vmin",
        width: "20vmin",
        marginLeft: "auto",
      }}
    />

    <br />
    <label
      htmlFor="amount"
      style={{
        color: themeStyles["--background"],
        fontSize: "2vmin",
      }}
    >
      Total:
    </label>
    <br />
    <input
      type="number"
      id="amount"
      value={upiDetails.amount}
      maxLength="2vmin"
      onChange={(e) =>
        setUpiDetails({ ...upiDetails, amount: e.target.value })
      }
      required
      readOnly // Add the readOnly attribute here
      style={{ marginBottom: "1vmin", width: "20vmin", maxLength: "2vmin" }}
    />
    <br />
    <center>
      <button
        type="submit"
        style={{
          marginLeft: "auto",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "0",
          padding: "1vmin 2vmin",
          marginTop: "1vmin",
          cursor: "pointer",
          width: "20vmin",
        }}
      >
        Pay with UPI
      </button>
    </center>
  </form>
</div>

              </div>
              <div
                className="card-option"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  flex: 1, // Set flex to 1
                  flexGrow: 1, // Set flexGrow to 1
                  marginLeft: "auto",
                }}
              >
                <br></br>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNN-wfxUwILBl3223VsAJu3eZWd_es_PzhNQ&usqp=CAU"
                  alt="Card"
                  style={{
                    width: "8vmin",
                    height: "4vmin",
                    marginBottom: "1vmin",
                  }}
                />
                {/* <span style={{ color: themeStyles['--background'], fontSize: '2.5vmin' }}></span> */}
                <br></br>
                <h2
                  style={{
                    margin: "0",
                    fontSize: "3vmin",
                    color: themeStyles["--background"],
                  }}
                >
                  Card Payment
                </h2>
                <br></br>
                {/* Include the Stripe Elements for Card payment */}
                <Elements stripe={stripePromise}>
                  <label
                    htmlFor="cardId"
                    style={{
                      color: themeStyles["--background"],
                      fontSize: "2vmin",
                    }}
                  >
                    Card Number:
                  </label>
                  <input
                    type="text"
                    size="2vmin"
                    id="cardId"
                    value={upiDetails.cardId}
                    onChange={(e) =>
                      setUpiDetails({ ...upiDetails, cardId: e.target.value })
                    }
                    required
                    style={{ marginBottom: "1vmin", width: "20vmin", }}
                  />
                  <label
                    htmlFor="cv"
                    style={{
                      color: themeStyles["--background"],
                      fontSize: "2vmin",
                    }}
                  >
                    CV:
                  </label>
                  <input
                    type="text"
                    id="cv"
                    value={upiDetails.cv}
                    onChange={(e) =>
                      setUpiDetails({ ...upiDetails, cv: e.target.value })
                    }
                    required
                    style={{ marginBottom: "1vmin", width: "20vmin" }}
                  />
                  {/* <CardPaymentForm />
                   */}
                  <form onSubmit={handleCardSubmit}>
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
                        width: "20vmin",
                      }}
                    >
                      Pay with Card
                    </button>
                  </form>
                </Elements>
              </div>
              {/* Add more payment options as needed */}
            </div>
          </div>

          {showPaymentSuccess && (
            <PaymentSuccessPopup onClose={handleClosePaymentSuccess} />
          )}

          {/* UPI Payment Section */}
          <div
            className="upi-payment-section"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: "3vmin",
            }}
          ></div>

          {/* Card Payment Section */}
          <div
            className="card-payment-section"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: "3vmin",
            }}
          ></div>
        </div>
      )}
    </div>
  );
};

export default PaymentPage;

// // pages/checkout.js
// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useRouter } from 'next/router';
// import useOrderStore from '../store/store';

// const PaymentPage = () => {
//   const router = useRouter();
//   const {
//     orderDetails,
//     merchantMetadata,
//     promoCode,
//     appliedPromo,
//     total,
//     orderamount,
//     setOrderDetails,
//     setMerchantMetadata,
//     setPromoCode,
//     setAppliedPromo,
//     setTotal,
//     setOrderAmount,
//   } = useOrderStore();

//   const handleBack = () =>{
//     window.history.back();
//   }
//   const themeStyles = merchantMetadata?.theme || {};

//   return (
//     <div className="checkout-container" style={{ backgroundColor: themeStyles['--primary'], width: '100%', height: '100%', display: 'flex', flexDirection: 'column', minHeight: "100vh" }}>
//       {merchantMetadata && (
//         <div className="theme-layer" style={{ borderRadius: '0.5rem',backgroundColor: themeStyles['--foreground'], width: '80%', padding: '4%', margin: '5%', display: 'flex', flexDirection: 'column', minHeight: "100vh"}}>
//           <div className="merchant-info" style={{ display: 'flex', alignItems: 'center', padding: '3vmin' }}>
//             <img src={merchantMetadata.merchantLogo} alt={merchantMetadata.merchantName} style={{ maxWidth: '7vmin', maxHeight: '7vmin', marginRight: '10px' }} />
//             <h1 style={{ margin: '0', fontSize: '5vmin', color: themeStyles['--background'] }}>{merchantMetadata.merchantName}</h1>
//           </div>
//           <button style={{maxWidth:'20vmin', border:'0', backgroundColor: themeStyles['--foreground'], color:themeStyles['--background']}} onClick={handleBack}>&laquo;</button>
//           <h1 style={{ margin: '0', fontSize: '3.5vmin', color: themeStyles['--background'], textAlign:'center' }}>Payment</h1>

//         </div>
//       )}
//     </div>
//   );
// };

// export default PaymentPage;
