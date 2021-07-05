import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/header";
import StepperComponent from "./components/stepper";

import Authentication from "./pages/authentication-page";
import Order from "./pages/order-page";
import Delivery from "./pages/delivery-page";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Header />
      <StepperComponent />
      <Switch>
        <Route exact path="/authentication" component={Authentication} />
        <Route path="/order" component={Order} />
        <Route path="/delivery" component={Delivery} />
      </Switch>
    </div>
  );
}

export default App;
