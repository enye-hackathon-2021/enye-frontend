import React from "react";
import { Route, Switch } from "react-router";
import Home from "./pages/Home";
import Incentives from "./pages/Incentives";
import Protocol from "./pages/Protocol";
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/incentives" exact component={Incentives} />
        <Route path="/protocol" exact component={Protocol} />
      </Switch>
    </div>
  );
}

export default App;
