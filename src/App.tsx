import { Switch, Route } from "react-router-dom";

import Header from "./components/header";
import LogIn from "./pages/logIn";
import Register from "./pages/register";

import "./styles.css";

function App() {
  console.log(" vevo");

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={LogIn} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </div>
  );
}

export default App;
