// React entry point — boots the app into the #root div from index.html.
// StrictMode runs lifecycle hooks twice in development to surface bugs.
// BrowserRouter gives us real URLs (/publications, /cv, ...) instead of
// hash-style ones. Combined with public/404.html, this works on GitHub Pages.
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
