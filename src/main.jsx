import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
import {
  TributeComponent,
  HeaderComponent,
  CrossLine,
  DescriptionComponent,
} from "../Components";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HeaderComponent />
    <CrossLine />
    <DescriptionComponent />
    <TributeComponent />
  </React.StrictMode>
);
