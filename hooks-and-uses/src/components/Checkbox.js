import { useReducer } from "react";

/**
 * useReducer takes in the reducer function and an initial state
 * 
 */

export default function CheckBox() {
    const [checked, toggle] = useReducer(checked => !checked, false);

    return (
        <>
            <input type="checkbox" value={checked} onChange={toggle} />
            {checked ? "checked" : "not checked"}
        </>
    )
}