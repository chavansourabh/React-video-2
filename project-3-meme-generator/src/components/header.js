import React from "react";

export default function Header() {
  return (
    <header className="header">
      <img
        src="./images/Troll-Face.png"
        alt="troll-face"
        className="header--img"
      />
      <h2 className="header--title">Meme Generator</h2>
      <p className="header--project">React Course - project 3</p>
    </header>
  );
}
