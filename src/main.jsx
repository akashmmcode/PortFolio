import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'

import {
  TributeComponent,
  HeaderComponent,
  CrossLine,
  DescriptionComponent,
  ScrollImageComponent,
  RoleComponent,
  JourneyComponent,
  TechStackComponent,
} from "../Components";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HeaderComponent />
    <CrossLine />
    <DescriptionComponent />
    <ScrollImageComponent/>
    <RoleComponent/>
    <TributeComponent />
    {/* <JourneyComponent/> */}
    <TechStackComponent/>
  </React.StrictMode>
);
