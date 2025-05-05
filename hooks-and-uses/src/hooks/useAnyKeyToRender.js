import { useEffect, useState } from "react";

export default function useAnyKeyToRender() {
    const [, forceRender] = useState();

    useEffect(() => {
        window.addEventListener("keydown", forceRender);
        return () => window.removeEventListener("keydown", forceRender);
    }, []);
}