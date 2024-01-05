// PaymentSuccessPopup.js

import React from "react";
import styles from "../styles/PaymentSuccessPopup.module.css";

const PaymentSuccessPopup = ({ onClose }) => {
  return (
    <div className={styles["payment-success-popup"]}>
      <div className={styles["popup-overlay"]}>
        <div className={styles["popup-content"]}>
          <h2>Payment Successful!</h2>
          <p>Your payment has been processed successfully.</p>
          <button onClick={onClose}>Continue</button>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccessPopup;
