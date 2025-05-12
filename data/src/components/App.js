import React, { useState } from "react";
import { FixedSizeList } from "react-window";
import { faker } from "@faker-js/faker";
import GithubUser from "./GithubUser";

// Create an array of 5000 fake people
const bigList = Array.from({ length: 5000 }, () => ({
  name: faker.person.firstName(),
  email: faker.internet.email(),
  avatar: faker.image.avatar()
}));

export default function App() {
    const [selected, setSelected] = useState("");

    const renderRow = ({ index, style }) => (
        <div onClick={() => setSelected("eliasnemr")} style={{ ...style, ...{display: "flex"} }}>
            <img 
                src={bigList[index].avatar}
                alt={bigList[index].name}
                width={50}
            />
            <p>
                {bigList[index].name} - {bigList[index].email}
            </p>
        </div>
    )
    
    return (
        <div>
            {selected.length && <GithubUser login={selected} />}

            <FixedSizeList height={window.innerHeight} width={window.innerWidth - 20} itemCount={bigList.length} itemSize={50}>        
                {renderRow}
            </FixedSizeList>
        </div>
    )
}