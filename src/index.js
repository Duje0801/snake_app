import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AppContexProvider } from "./context/Context";

const Application = AppContexProvider(App);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  //<React.StrictMode>
    <Application />
  //</React.StrictMode>
);
