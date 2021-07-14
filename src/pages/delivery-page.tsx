import React from "react";

import AddressForm from "../components/addressForm";

const Delivery = () => {
  return (
    <div className="delivery-container">
      <AddressForm kind={"delivery"} />
    </div>
  );
};

export default Delivery;
