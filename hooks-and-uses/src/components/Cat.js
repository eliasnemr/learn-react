import React, { memo } from "react";

function Cat({ name, meow = f => f }) {
    console.log(`Rendering ${name}`);
    return <p onClick={meow}>{name}</p>
}

const PureCat = memo(Cat);
const RenderCatOnce = memo(Cat, (prevProps, nextProps) => prevProps.name === nextProps.name);

export { PureCat, RenderCatOnce};