import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Import de React Router
import { BrowserRouter } from "react-router-dom";

import App from "./App.jsx";

// Police générale de l'interface
import "@fontsource/inter/400.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";

// Police adaptée aux personnes dyslexiques
import "@fontsource/opendyslexic/400.css";

// CSS global
import "./index.css";



createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);