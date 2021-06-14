import React, { createContext, useContext, useState, ReactNode } from "react";

type Customer = {
  gender: string;
  firstName: string;
  lastName: string;
  email: string;
  birthDate?: string;
};
type Basket = { total: number; tax: number; products: any[] };

type Address = {
  id: string;
  gender: string;
  firstName: string;
  lastName: string;
  street: string;
  houseNumber: string;
  additional?: string;
  zipCode: string;
  city: string;
  countryCode: string;
};

type CheckoutState = {
  customer: Customer;
  basket: Basket;
  billingAddress: Address;
  shippingAddress: Address;
  selectedPayment: string;
};

type Step = "auth" | "delivery" | "payment" | "confirmation";

type CheckoutStateContextt = {
  checkoutState: CheckoutState;
  currentStep: Step;
  setCurrentStep: (step: Step) => void;
  setCustomer: (customer: Customer) => void;
  setAddress: (address: Address, kind: "billing" | "shipping") => void;
  setPayment: (paymentMethod: string) => void;
};

const CheckoutStateContext = createContext<CheckoutStateContextt>({} as any);

export const CheckoutStateProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [currentStep, _setCurrentStep] = useState<Step>("auth");

  const setCurrentStep = (step: Step) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    _setCurrentStep(step);
  };

  const [checkoutState, setCheckoutState] = useState<CheckoutState>();

  if (!checkoutState) {
    return null;
  }

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

  return (
    <CheckoutStateContext.Provider
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
    </CheckoutStateContext.Provider>
  );
};

export const useCheckoutState = () => useContext(CheckoutStateContext);
