import React, { useEffect, useMemo } from "react";
import useAnyKeyToRender from "../hooks/useAnyKeyToRender";

export default function App() {
    useAnyKeyToRender();

    const words = useMemo(() => ["stick", "powder", "day"], []);
    useEffect(() => {
        console.log("fresh render");
    }, [words]);

    return (
        <>
            <h1>Open the console</h1>
        </>
    )
}