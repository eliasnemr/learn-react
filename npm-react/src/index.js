import React from "react";
import { createRoot } from "react-dom/client";
import Menu from "./components/Menu";
import data from "./data/recipes.json";
import StarRating from "./components/StarRating";

// Get the root element
const rootElement = document.getElementById("root");

// Create a root
const root = createRoot(rootElement);

// Render your app
root.render(<StarRating totalStars={5} />);