import React from "react";
// import Contact from "./components/Contact";

import Navbar from "./components/Navbar";
import Hero from "./components/hero";
import Card from "./components/Card";
import Data from "./components/data";

export default function App() {
  const dataElement = Data.map((profile) => {
    return <Card key={profile.id} item={profile} />;
  });

  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">{dataElement}</section>

      {/* <Contact
        img="./images/cat-1.jpg"
        name="Mr. Whiskerson"
        phone="(212) 555-1234"
        email="mr.whiskaz@catnap.meow"
      />
      <Contact
        img="./images/cat-2.jpg"
        name="Fluffykins"
        phone="(212) 555-2345"
        email="fluff@me.com"
      />
      <Contact
        img="./images/cat-3.jpg"
        name="Felix"
        phone="(212) 555-4567"
        email="thecat@hotmail.com"
      />

      <Contact
        img="./images/cat-4.jpg"
        name="Pumpkin"
        phone="(0800) CAT KING"
        email="pumpkin@scrimba.com"
      /> */}
    </div>
  );
}
