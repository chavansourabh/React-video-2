import React from "react";
import Navbar from "./Navbar";
import data from "./data";
import Card from "./Card";

export default function App() {
  const cards = data.map((card) => {
    return <Card key={card.id} item={card} />;
  });
  return (
    <div>
      <Navbar />
      {cards}
    </div>
  );
}
