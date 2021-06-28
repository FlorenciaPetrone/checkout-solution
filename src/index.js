import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { CheckoutProvider } from "./utils/checkoutState.original";

import "./styles.css";

ReactDOM.render(
  <CheckoutProvider>
    <Router>
      <App />
    </Router>
  </CheckoutProvider>,
  document.getElementById("root")
);
