import {
  Customer,
  Basket,
  Address,
  CheckoutState,
} from "./checkoutState.original";

const customer: Customer = {
  email: "",
  password: "",
};

const basket: Basket = {
  total: 45.9,
  unit: 1,
  products: [{ id: "1", name: "handBag" }],
};

const address: Address = {
  gender: "",
  firstname: "",
  lastname: "",
  street: "",
  zipcode: "",
  city: "",
  country: "",
};

const defaultState: CheckoutState = {
  customer,
  basket,
  billingAddress: address,
  deliveryAddress: address,
};

export default defaultState;
