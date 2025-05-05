import React, { useState } from "react";
import { RenderCatOnce } from "./Cat";


export default function App() {
    const [cats, setCats] = useState(["Biscuit", "Jungle", "Outlaw"]);

    return (
        <>
            {cats.map((name, i) => (<RenderCatOnce key={i} name={name} meow={() => console.log("Meowwww!")} />))}
            <button onClick={() => setCats([...cats, prompt("Name a cat")])}>
                Add a cat
            </button>
        </>
    )
}