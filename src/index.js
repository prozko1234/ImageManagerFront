import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";
import "../public/styles/main.scss";
import configureStore from "./redux/configureStore";
import { Provider as ReduxProvider } from "react-redux";
import initialState from "./redux/reducers/initialState";

const store = configureStore(initialState);

render(
  <ReduxProvider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ReduxProvider>,
  document.getElementById("root")
);
