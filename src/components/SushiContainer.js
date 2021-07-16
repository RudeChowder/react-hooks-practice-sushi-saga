import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer({ sushis, eatenSushis, onEatSushi }) {
  const [conveyorPosition, setConveyorPosition] = useState(0)
  const nextConveyorPosition = conveyorPosition + 4

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

  const sushiToDisplay = () => {
    let newSushisToDisplay = []
    if ((nextConveyorPosition) > 100) {
      const remainder = 100 - conveyorPosition
      newSushisToDisplay = sushiComponents.slice(-remainder)
      newSushisToDisplay = newSushisToDisplay.concat(sushiComponents.slice(0, (4 - remainder)))
    } else {
      newSushisToDisplay =  sushiComponents.slice(conveyorPosition, nextConveyorPosition)
    }
    console.log(newSushisToDisplay.map(sushi => sushi.key))
    return newSushisToDisplay
  }

  const handleMoreSushi = () => {
    if(nextConveyorPosition >= 100){
      setConveyorPosition(nextConveyorPosition - 100)
    } else {
      setConveyorPosition(nextConveyorPosition)
    }
  }

  return (
    <div className="belt">
      {sushiToDisplay()}
      <MoreButton onMoreSushi={handleMoreSushi}/>
    </div>
  );
}

export default SushiContainer;
