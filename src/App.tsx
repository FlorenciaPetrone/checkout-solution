import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/header";
import StepperComponent from "./components/stepper";

import Authentication from "./pages/authentication";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Header />
      <StepperComponent />
      <Switch>
        <Route exact path="/authentication" component={Authentication} />
      </Switch>
    </div>
  );
}

export default App;
