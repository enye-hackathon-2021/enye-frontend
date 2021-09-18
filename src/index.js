import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import {reducers} from './reducers'
import thunk from "redux-thunk";
import { HashRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import {defaultThem} from "./styles/theme"
import {GlobalStyles} from "./styles/global"
import "./styles/global.scss";
import App from "./App";

const store = createStore(reducers, {}, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
    <Provider store={store}>
    <ThemeProvider theme={defaultThem}>
    <GlobalStyles/>
      <App />,
     </ThemeProvider>
    </Provider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
