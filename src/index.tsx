import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { CheckoutStateProvider } from "./utils/checkoutState";

import "./styles.css";

ReactDOM.render(
  <CheckoutStateProvider>
    <Router>
      <App />
    </Router>
  </CheckoutStateProvider>,
  document.getElementById("root")
);
