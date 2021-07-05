import React from "react";

import AddressForm from "../components/addressForm";
import Order from "../components/order";

import "./pages-styles.css";

const OrderPage: React.FC = () => {
  return (
    <div className="delivery-container">
      <AddressForm kind={"billing"} />
      <Order />
    </div>
  );
};

export default OrderPage;
