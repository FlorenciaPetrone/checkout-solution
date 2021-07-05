import React, { createContext, useContext, ReactNode, useState } from "react";
import defaultState from "./defaultCheckoutState";

// TYPES
export type Customer = {
  gender?: string;
  firstName?: string;
  lastName?: string;
  email: string;
  password: string;
};

export type Basket = { total: number; tax: number; products: any[] };

export type Address = {
  gender?: string;
  firstname: string;
  lastname: string;
  street: string;
  additional?: string;
  zipcode: string;
  city: string;
  country: string;
};

export type CheckoutState = {
  customer: Customer;
  basket: Basket;
  billingAddress: Address;
  deliveryAddress: Address;
  selectedPayment?: string;
};

export type Step =
  | "authentication"
  | "delivery"
  | "order"
  | "payment"
  | "confirmation";

type CheckoutContext = {
  checkoutState?: CheckoutState;
  currentStep: Step;
  setCurrentStep: (step: Step) => void;
  setCustomer: (customer: Customer) => void;
  setAddress: (address: Address, kind: "billing" | "delivery") => void;
  setPayment: (paymentMethod: string) => void;
};

//CONTEXT
const Context = createContext<CheckoutContext>({} as any);

export const CheckoutProvider = ({ children }: { children: ReactNode }) => {
  const [currentStep, _setCurrentStep] = useState<Step>("authentication");

  console.log(currentStep);

  const setCurrentStep = (step: Step) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    _setCurrentStep(step);
  };

  const [checkoutState, setCheckoutState] =
    useState<CheckoutState>(defaultState);

  const setCustomer = (customer: Customer) => {
    setCheckoutState({
      ...checkoutState,
      customer: customer,
    });
  };

  const setAddress = (address: Address, kind: "billing" | "delivery") => {
    setCheckoutState({
      ...checkoutState,
      [kind + "Address"]: address,
    });
  };

  const setPayment = (paymentMethod: string) => {
    setCheckoutState({
      ...checkoutState,
      selectedPayment: paymentMethod,
    });
  };

  console.log(checkoutState);
  return (
    <Context.Provider
      value={{
        checkoutState,
        currentStep,
        setCurrentStep,
        setCustomer,
        setAddress,
        setPayment,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useCheckoutState = () => useContext(Context);
