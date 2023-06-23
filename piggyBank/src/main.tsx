import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import HomeControler from "./views/home/HomeControler.tsx";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <HomeControler />
  </React.StrictMode>
);
