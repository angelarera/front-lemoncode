import React from "react";
import { createRoot } from "react-dom/client";
import { AverageComponent } from "./averageComponent";
import "./mystyles.scss";

const root = createRoot(document.getElementById("root"));
root.render(
  <div className="container">
    <AverageComponent />
    <h1 className="title">Welcome back!</h1>
  </div>
);
