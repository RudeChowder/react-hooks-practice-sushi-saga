import React from "react";

function Sushi({ id, name, image, price, eaten, onEatSushi }) {
  const handleClick = () => {
    !eaten && onEatSushi(id, price)
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={handleClick}>
        {eaten ? null : (
          <img
            src={image}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
