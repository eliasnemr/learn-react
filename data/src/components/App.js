import React from "react";
import { FixedSizeList } from "react-window";
import { faker } from "@faker-js/faker";

// Create an array of 5000 fake people
const bigList = Array.from({ length: 5000 }, () => ({
  name: faker.person.firstName(),
  email: faker.internet.email(),
  avatar: faker.image.avatar()
}));

export default function App() {
    const renderRow = ({ index, style }) => (
        <div style={{ ...style, ...{display: "flex"} }}>
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
    
    return (<FixedSizeList height={window.innerHeight} width={window.innerWidth - 20} itemCount={bigList.length} itemSize={50}>        
            {renderRow}
    </FixedSizeList>)
}