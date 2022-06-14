import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";

const store = configureStore();

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>
);
