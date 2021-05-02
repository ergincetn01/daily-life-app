import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import 'alertifyjs/build/css/alertify.css';

import { Provider } from "react-redux";
import configureStore from "./Store/Reducers/configStore";
const store = configureStore();

ReactDOM.render(
  <BrowserRouter>
   <App />
  </BrowserRouter>,
  document.getElementById("root")
);

