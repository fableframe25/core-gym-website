import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/700.css";

// Apply premium font styling to the body
document.body.style.fontFamily = "'Montserrat', Arial, sans-serif";
document.body.style.fontWeight = "400";
document.body.style.lineHeight = "1.6";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
