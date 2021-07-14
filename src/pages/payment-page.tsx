import React from "react";

import PaymentMethods from "../components/paymentMethods";
import Order from "../components/order";

import "./pages-styles.css";

const Payment = () => {
  return (
    <div className="payment-container">
      <PaymentMethods />
      <Order />
    </div>
  );
};

export default Payment;
