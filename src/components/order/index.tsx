import React from "react";

import CartItem from "../cartItem";
import { useCheckoutState } from "../../utils/checkoutState.original";

import "./styles.css";

const Order = () => {
  const { checkoutState } = useCheckoutState();

  const deliveryAddress = {
    firstName: checkoutState?.deliveryAddress.firstname,
    lastName: checkoutState?.deliveryAddress.lastname,
    street: checkoutState?.deliveryAddress.street,
    zipCode: checkoutState?.deliveryAddress.zipcode,
    city: checkoutState?.deliveryAddress.city,
    country: checkoutState?.deliveryAddress.country,
  };

  return (
    <div className="order-container">
      <h2>Your order</h2>
      <div className="delivery-address-container">
        <h3>delivery address</h3>
        <div className="user-data">
          <h5>
            {deliveryAddress.firstName} {deliveryAddress.lastName}
          </h5>
          <h5>{deliveryAddress.street}</h5>
          <h5>{deliveryAddress.zipCode}</h5>
          <h5>
            {deliveryAddress.city} {deliveryAddress.country}
          </h5>
        </div>
        <span className="line"></span>
        <CartItem />
      </div>
    </div>
  );
};

export default Order;
