import React from "react";
import IngredientList from "./IngredientList";
import Instructions from "./Instructions";

export default function Recipe({ name, ingredients, steps}) {

    return (
        <section id="baked-salmon">
            <h1>{name}</h1>
            <IngredientList list={ingredients} />
            <Instructions title="Cooking Instructions" steps={steps} />
        </section>
    )
}