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
  total: 100,
  tax: 20,
  products: [
    { id: "1", name: "short" },
    { id: "2", name: "jeans" },
  ],
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
