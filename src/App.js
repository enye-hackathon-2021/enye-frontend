import React from "react";
import { Route, Switch } from "react-router";
import Home from "./pages/Home";
import Auth from "./pages/auth";
import Protocol from "./pages/Protocol";


function App() {
  return (
    <div className="h-screen w-full bg-green-50">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/auth" exact><Auth/></Route>
        <Route path="/protocol" exact component={Protocol} />
      </Switch>
    </div>
  );
}

export default App;
