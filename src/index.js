import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { BrowserRouter } from "react-router-dom";
import "./styles/global.scss";
import App from "./App";

// const store = createStore(reducers, {}, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />,
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
