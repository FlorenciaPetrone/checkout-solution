import React, { useState } from "react";
import { useCheckoutState } from "../../utils/checkoutState.original";

import bagImage from "./bag.jpg";

import "./styles.css";

const CartItem: React.FC = () => {
  return (
    <div className="product-container">
      <img src={bagImage} alt="Handbag" className="product-image" />
      <div className="details-container">
        <div className="title">
          <p>Handbag</p>
        </div>
        <div className="info-container">
          <p>Color: white-blue</p>
          <p>Shipping: €0.00</p>
        </div>
        <div></div>
        <h4 className="total">Total: €45.90</h4>
      </div>
    </div>
  );
};

export default CartItem;
