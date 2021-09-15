import React from "react";
import { Route, Switch } from "react-router";
import Home from "./pages/Home";
import Auth from "./pages/auth";
import Dashboard from "./pages/Dashboard";


function App() {
  return (
    <div className="h-screen w-full bg-green-50">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/auth" exact>
          <Auth />
        </Route>
        <Route path="/dashboard" exact component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;
