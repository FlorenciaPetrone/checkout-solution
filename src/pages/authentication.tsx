import React from "react";
import Register from "../components/register";
import LogIn from "../components/logIn";
import { useCheckoutState } from "../utils/checkoutState.original";

const Authentication = () => {
  const { isRegistered } = useCheckoutState();

  return isRegistered ? <LogIn /> : <Register />;
};

export default Authentication;
