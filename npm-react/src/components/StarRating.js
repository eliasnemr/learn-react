import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const Star = ({ selected = false, onSelect = f => f }) => (<FaStar color={selected ? "red" : "grey"} onClick={onSelect} />);

const createArray = length => [...Array(length)];

export default function StarRating({ style = {}, totalStars = 5, ...props }) {
    const [selectedStars, setSelectedStars] = useState(3);

    return <div style={{ padding: "5px", ...style }} {...props}>
        {createArray(totalStars).map((n, i) => (
            <Star key={i} selected={selectedStars > i} onSelect={() => setSelectedStars(i + 1)} />
        ))}

        <p>
            {selectedStars} of {totalStars} stars
        </p>
    </div>
}