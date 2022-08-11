import React, { useState, useEffect } from "react";
import Die from "./Die";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

export default function App() {
  const [numbersArray, setNumbersArray] = useState(allNewDice());
  const [tenzies, setTenzies] = useState(false);

  useEffect(() => {
    let allHeld = numbersArray.every((die) => die.isHeld);
    const firstValue = numbersArray[0].value;
    const allSameValue = numbersArray.every((die) => die.value === firstValue);
    if (allHeld && allSameValue) {
      setTenzies(true);
      console.log("You won!");
    }
  }, [numbersArray]);

  function generateNewDie() {
    return {
      value: Math.floor(Math.random() * 6 + 1),
      isHeld: false,
      id: nanoid(),
    };
  }

  function allNewDice() {
    let newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(generateNewDie());
    }
    return newDice;
  }

  function rollDice() {
    setNumbersArray((oldDice) =>
      oldDice.map((die) => {
        return die.isHeld ? die : generateNewDie();
      })
    );

    tenzies && setNumbersArray(allNewDice(), setTenzies(false));
  }

  function holdDice(id) {
    setNumbersArray((oldDice) =>
      oldDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  }

  const numbersArrayElement = numbersArray.map((number) => (
    <Die
      value={number.value}
      key={number.id}
      id={number.id}
      isHeld={number.isHeld}
      toggle={holdDice}
    />
  ));

  return (
    <main>
      {tenzies && <Confetti width={470} />}
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="dice-container">{numbersArrayElement}</div>
      <button className="btn " onClick={rollDice}>
        {tenzies ? "New Game" : "Roll"}
      </button>
    </main>
  );
}
