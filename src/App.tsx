import React from "react";
import "./App.css";
import { AppLeftControls, AppMastHeader, AppRightControls } from "./components";

function App() {
  return (
    <>
      <AppMastHeader />
      <AppLeftControls />
      <AppRightControls />
    </>
  );
}

export default App;
