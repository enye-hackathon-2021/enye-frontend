import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import {reducers} from './reducers'
import thunk from "redux-thunk";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import {defaultThem} from "./styles/theme"
import "./styles/global.scss";
import App from "./App";

const store = createStore(reducers, {}, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <ThemeProvider theme={defaultThem}>
      <App />,
     </ThemeProvider>
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
