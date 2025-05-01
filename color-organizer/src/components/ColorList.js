import React from "react";
import Color from "./Color";
import { ColorContext } from "..";
import { useColors } from "../providers/color-hooks";

export default function ColorList() {
    const { colors } = useColors();
    
    if (!colors.length) return <div>No Colors Listed. (Add a color) </div>;

    return (
        <div>
            {
                colors.map(color => <Color key={color.id} {...color} onRemove={onRemoveColor} onRate={onRateColor} />)
            }
        </div>
    )

}