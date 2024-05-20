// React entry point
import React from "react";
import ReactDOM from "react-dom/client";

// App root component
import App from "./App.tsx";

import { BrowserRouter } from "react-router-dom";

// Overriding Bootstrap styles with custom styles
import "./scss/styles.scss";

// TODO: implement https://lingui.dev/ for i18n
// TODO: implement AXIOS for API calls & get all data from API, not from local JSON files
// TODO: implement local storage for saving user data
// TODO: implement placeholder for all components -> images, text, cards, etc.
// TODO: add transaction effect when user change the page (route change)
// ? TODO: transaction effect for pages slide in/out from right to left || top to bottom
// TODO: implement dark and light theme
// ? TODO: implement EPageHeaders, so all headers can be controlled from one place
// ? TODO: use EPageHeaders in navigation for consistent header labels

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
