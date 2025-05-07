import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import ColorProvider from "./providers/color-hooks";

// Get the root element
const rootElement = document.getElementById("root");

// Create a root
const root = createRoot(rootElement);

// Render your app
root.render(
    <ColorProvider>
        <App />
    </ColorProvider>
);