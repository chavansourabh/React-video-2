import React from "react";
import boxes from "./boxes";
import Box from "./Box";

function App() {
  const [squares, setSquares] = React.useState(boxes);

  function toggle(id) {
    setSquares((prevSquares) => {
      return prevSquares.map((square) => {
        return square.id === id ? { ...square, on: !square.on } : square;
      });
    });
  }

  const squareElement = squares.map((box) => {
    return <Box on={box.on} key={box.id} id={box.id} handleClick={toggle} />;
  });

  return <div>{squareElement}</div>;
}

export default App;
