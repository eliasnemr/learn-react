import { useCallback, useMemo, useState } from "react";

export default function useIterator(
    items = [],
    initialIndex = 0
) {
    const [i, setIndex] = useState(initialIndex);

    const prev = useCallback(() => {
        if (i === 0) return setIndex(items.length - 1); // keep index at 0
        setIndex(i-1);
    }, [i]);
    
    const next = useCallback(() => {
        if (i === items.length - 1) return setIndex(0); // go back to beginning
        setIndex(i + 1);
    }, [i]);

    const item = useMemo(() => items[i], [i]);
    return [item || items[0], prev, next];
}