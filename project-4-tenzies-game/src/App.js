import React from "react";
import Die from "./Die";
import { nanoid } from "nanoid";

export default function App() {
  const [numbersArray, setNumbersArray] = React.useState(allNewDice());

  function allNewDice() {
    let newDice = [];

    for (let i = 0; i < 10; i++) {
      newDice.push({
        value: Math.floor(Math.random() * 6 + 1),
        isHeld: false,
        id: nanoid(),
      });
    }
    console.log(newDice);
    return newDice;
  }
  // console.log(allNewDice());
  function handleClick() {
    setNumbersArray((prevState) => allNewDice());
  }

  const numbersArrayElement = numbersArray.map((number) => (
    <Die value={number.value} key={number.id} />
  ));
  console.log(numbersArrayElement);

  return (
    <main>
      <div className="dice-container">{numbersArrayElement}</div>
      <button className="btn " onClick={handleClick}>
        Roll
      </button>
    </main>
  );
}
