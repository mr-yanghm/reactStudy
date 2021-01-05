import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import AppReducer from "./appReducer";

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <AppReducer />
  </React.StrictMode>,
  document.getElementById("root")
);
