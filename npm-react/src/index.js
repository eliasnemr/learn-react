import React from "react";
import { createRoot } from "react-dom/client";
import Menu from "./components/Menu";
import data from "./data/recipes.json";

// Get the root element
const rootElement = document.getElementById("root");

// Create a root
const root = createRoot(rootElement);

// Render your app
root.render(<Menu recipes={data} />);