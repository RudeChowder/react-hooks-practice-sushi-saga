import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer({ sushis, eatenSushis, onEatSushi }) {
  const [conveyorPosition, setConveyorPosition] = useState(0)

  const sushiComponents = sushis.map(sushi => {
    return (
      <Sushi
        key={sushi.id}
        id={sushi.id}
        name={sushi.name}
        image={sushi.img_url}
        price={sushi.price}
        eaten={eatenSushis.includes(sushi.id)}
        onEatSushi={onEatSushi}
      />
    )
  })

  console.log(sushis)

  const sushiToDisplay = () => {
    if ((conveyorPosition + 4) > 100) {
      
    } else {
      return sushiComponents.slice(conveyorPosition, conveyorPosition + 4)
    }
  }

  const handleMoreSushi = () => {
    setConveyorPosition(conveyorPosition => conveyorPosition + 4)
  }

  return (
    <div className="belt">
      {sushiToDisplay()}
      <MoreButton onMoreSushi={handleMoreSushi}/>
    </div>
  );
}

export default SushiContainer;
