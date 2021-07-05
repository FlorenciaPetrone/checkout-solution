import React, { useState } from "react";

import bagImage from "./bag.jpg";

import "./styles.css";

const CartItem: React.FC = () => {
  const [price, setPrice] = useState(25);
  const [amount, setAmount] = useState(1);

  return (
    <div className="product-container">
      <img src={bagImage} alt="Handbag" className="product-image" />
      <div className="details-container">
        <div className="title">
          <h4>Handbag</h4>
        </div>
        <div className="buttons-container">
          <button disabled={amount === 0} onClick={() => setAmount(amount - 1)}>
            -
          </button>
          <p>{amount}</p>
          <button onClick={() => setAmount(amount + 1)}>+</button>
        </div>
        <div className="info-container">
          <p>Color: white-blue</p>
          <br />
          <p>Unit price: €{price.toFixed(2)}</p>
          <p>Shipping: €0.00</p>
        </div>
        <h4>Total: €{(amount * price).toFixed(2)}</h4>
      </div>
    </div>
  );
};

export default CartItem;
