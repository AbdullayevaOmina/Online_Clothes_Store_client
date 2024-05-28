import React from "react";
import ReactDOM from "react-dom/client";
import Root from "@router";
import { DarkThemeToggle, Flowbite } from "flowbite-react";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Flowbite>
      <Root />
      <DarkThemeToggle className="fixed bottom-3 right-3" />
    </Flowbite>
  </React.StrictMode>
);
