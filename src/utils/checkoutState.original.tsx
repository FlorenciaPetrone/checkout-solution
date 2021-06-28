import React, { createContext, useContext, ReactNode, useState } from "react";
import defaultState from "./defaultCheckoutState";

// TYPES
export type Customer = {
  gender?: string;
  firstName?: string;
  lastName?: string;
  email: string;
  birthDate?: string;
  password: string;
};

export type Basket = { total: number; tax: number; products: any[] };

export type Address = {
  id: string;
  gender: string;
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
  shippingAddress: Address;
  selectedPayment?: string;
};

export type Step = "authentication" | "delivery" | "payment" | "confirmation";

type CheckoutContext = {
  checkoutState?: CheckoutState;
  currentStep: Step;
  isRegistered: boolean;
  setIsRegistered: (state: boolean) => void;
  setCurrentStep: (step: Step) => void;
  setCustomer: (customer: Customer) => void;
  setAddress: (address: Address, kind: "billing" | "shipping") => void;
  setPayment: (paymentMethod: string) => void;
};

//CONTEXT
const Context = createContext<CheckoutContext>({} as any);

export const CheckoutProvider = ({ children }: { children: ReactNode }) => {
  const [currentStep, _setCurrentStep] = useState<Step>("payment");
  const [isRegistered, setIsRegistered] = useState(true);

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

  const setAddress = (address: Address, kind: "billing" | "shipping") => {
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
        isRegistered,
        setIsRegistered,
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
