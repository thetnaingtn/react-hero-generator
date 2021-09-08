import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import OptionsContextProvider from "./context/option-context";

ReactDOM.render(
  <React.StrictMode>
    <OptionsContextProvider>
      <App />
    </OptionsContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
