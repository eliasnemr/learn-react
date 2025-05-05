import React from "react";
import { useInput } from "../hooks/useInput";
import { useColors } from "../providers/color-hooks";

// declarative code, controlled component, it is controlled by react
export default function AddColorForm() {
    const { addColor } = useColors();
    const [titleProps, resetTitle] = useInput("");
    const [colorProps, resetColor] = useInput("#000000");

    const submit = e => {
        e.preventDefault();
        addColor(titleProps.value, colorProps.value);
        resetTitle();
        resetColor();
    }

    return (
        <form onSubmit={submit}>
            <input {...titleProps} type="text" placeholder="color title..." required />
            <input  {...colorProps} type="color" required />
            <button type="submit">add</button>
        </form>
    )
}

// // imperative code, uncontrolled component
// export default function AddColorForm({ onNewColor = f => f }) {
//     const txtTitle = useRef();
//     const hexInput = useRef();

//     const submit = e => {
//         e.preventDefault();
//         onNewColor(txtTitle.current.value, hexInput.current.value);
//         txtTitle.current.value = ""; 
//         hexInput.current.value = "";        
//     }

//     return (
//         <form onSubmit={submit}>
//             <input ref={txtTitle} type="text" placeholder="color title..." required />
//             <input ref={hexInput} type="color" required />
//             <button type="submit">add</button>
//         </form>
//     )
// }