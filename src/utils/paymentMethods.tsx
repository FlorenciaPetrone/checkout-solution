import React from "react";

import PaypalIcon from "./icons/paypal.png";
import Visa from "./icons/visa.png";
import MasterCard from "./icons/mastercard.png";

export const paymentMethods = [
  {
    id: 0,
    name: "PayPal",
    src: PaypalIcon,
    hoverText:
      "An existing paypal account is not necessary. You can open a new one or register as a guest. After confirming the order, we will automatically forward you to PayPal",
  },
  {
    id: 1,
    name: "Visa",
    src: Visa,
    hoverText:
      "With VISA you can pay safely and conveniently with us. After confirming the order, enter your credit card details.The debit only happens when the goods have left our warehouse.",
  },
  {
    id: 2,
    name: "Mastercard",
    src: MasterCard,
    hoverText:
      "With Mastercard you can pay safely and conveniently with us. After confirming the order, enter your credit card details.The debit only happens when the goods have left our warehouse.",
  },
];
