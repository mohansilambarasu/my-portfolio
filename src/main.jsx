import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { StarsBackgroundProvider } from "./context/starsbackgroundContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StarsBackgroundProvider>
      <App />
    </StarsBackgroundProvider>
  </StrictMode>
);
