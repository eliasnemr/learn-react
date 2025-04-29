import React, { useRef } from "react";

// imperative code, uncontrolled component
export default function AddColorForm({ onNewColor = f => f }) {
    const txtTitle = useRef();
    const hexInput = useRef();

    const submit = e => {
        e.preventDefault();
        onNewColor(txtTitle.current.value, hexInput.current.value);
        txtTitle.current.value = ""; 
        hexInput.current.value = "";        
    }

    return (
        <form onSubmit={submit}>
            <input ref={txtTitle} type="text" placeholder="color title..." required />
            <input ref={hexInput} type="color" required />
            <button type="submit">add</button>
        </form>
    )
}