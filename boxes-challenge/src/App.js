import React from "react";
import boxes from "./boxes";
import Box from "./Box";

function App() {
  const [squares, setSquares] = React.useState(boxes);

  function toggle(id) {
    console.log(id);
    setSquares((prevSquares) => {
      const newSquares = [];
      for (let i = 0; i < prevSquares.length; i++) {
        const currentSquare = prevSquares[i];
        if (currentSquare.id === id) {
          const updatedSquare = {
            ...currentSquare,
            on: !currentSquare.on,
          };
          newSquares.push(updatedSquare);
        } else {
          newSquares.push(currentSquare);
        }
      }
      return newSquares;
    });
  }

  const squareElement = squares.map((box) => {
    return <Box on={box.on} key={box.id} id={box.id} handleClick={toggle} />;
  });

  return <div>{squareElement}</div>;
}

export default App;
