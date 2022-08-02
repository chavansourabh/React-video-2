import React from "react";
import boxes from "./boxes";
import Box from "./Box";

function App() {
  const [squares, setSquares] = React.useState(boxes);

  const squareElement = squares.map((box) => {
    function toggle(id) {
      console.log(id);
      // setSquares((prevState) => {
      //   return (prevState = !prevState);
      // });
    }
    return <Box on={box.on} key={box.id} id={box.id} handleClick={toggle} />;
  });
  return <div>{squareElement}</div>;
}

export default App;
