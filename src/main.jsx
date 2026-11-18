import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "@/styles/tokens.css";
import "@/styles/global.css";
import "@/styles/components.css";
import "@/styles/experience.css";
import "@/styles/hero.css";
import "@/styles/redesign.css";
import "@/styles/redesign-sections.css";
import "@/styles/redesign-experience.css";
import "@/styles/redesign-rest.css";
import App from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
