import React, { createContext, useState } from "react";
import colorData from "../data/color-data.json";
import { v4 } from "uuid";

const ColorContext = createContext();

export default function ColorProvider ({ children }) {
    const [colors, setColors] = useState(colorData);

    const addColor = (title, color) => {
        const newColors = [
            ...colors,
            {
                id: v4(),
                rating: 0,
                title,
                color
            }
        ];

        setColors(newColors);
    }

    const rateColor = (id, rating) => {
        setColors(
            colors.map(color => (color.id === id ? { ...color, rating } : color ))
        );
    }

    const removeColor = id => setColors(colors.filter(color => color.id !== id));
    
    return (
        <ColorContext.Provider value={{ colors, addColor, removeColor, rateColor }}>
            {children}
        </ColorContext.Provider>
    )
}

export const useColors = () => useContext(ColorContext);