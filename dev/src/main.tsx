// React entry point
import React from "react";
import ReactDOM from "react-dom/client";

// App root component
import App from "./App.tsx";

// Styles
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
