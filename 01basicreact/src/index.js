import React from "react"; // core foundational library:
import ReactDOM from "react-dom/client"; // implementation of react fro web

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
