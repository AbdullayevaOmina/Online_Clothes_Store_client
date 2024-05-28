import React from "react";
import ReactDOM from "react-dom/client";
import Root from "@router";
import { Flowbite } from "flowbite-react";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Flowbite>
      <Root />
    </Flowbite>
  </React.StrictMode>
);
