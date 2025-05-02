import React, { useState } from "react";

export default function App() {
    const [checked, setChecked] = useState(false);

    alert(`checked: ${checked.toString()}`);

    return (
        <>
            <input type="checkbox" value={checked} onChange={() => setChecked(checked => !checked)} />
            {checked ? "checked" : "not checked"}
        </>
    )
}