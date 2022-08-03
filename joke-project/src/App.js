import React from "react";
import Joke from "./joke";
import jokesData from "./jokesData";

export default function App() {
  const jokeElement = jokesData.map((joke) => {
    return (
      <Joke
        setup={joke.setup}
        punchline={joke.punchline}
        id={joke.id}
        key={joke.id}
      />
    );
  });

  return <div>{jokeElement}</div>;
}

/* <h1 className="text-center container-fluid bg-secondary p-4 text-white">
        Jokes
      </h1>

      <Joke
        setup="I got my daughter a fridge for her birthday."
        punchline=" I cant wait to see her face light up when she opens it."
        id={1}
      />
      <Joke
        id={2}
        setup="How did the hacker escape the police?"
        punchline="He just ransomware!"
      />
      <Joke
        id={3}
        setup="Why don't pirates travel on mountain roads?"
        punchline=" Scurvy."
      />
      <Joke
        id={4}
        setup="Why do bees stay in the hive in the winter?"
        punchline="Swarm."
      />
      <Joke
        id={5}
        setup="What's the best thing about Switzerland?"
        punchline="I don't know, but the flag is a big plus!"
      />
      <Joke
        id={6}
        punchline="It’s hard to explain puns to kleptomaniacs because 
they always take things literally."
      /> */
