import React from "react";

import AddressForm from "../components/addressForm";
import YourOrder from "../components/order";

import "./pages-styles.css";

const OrderPage: React.FC = () => {
  return (
    <div className="order-page-container">
      <AddressForm kind={"billing"} />
      <YourOrder />
    </div>
  );
};

export default OrderPage;
