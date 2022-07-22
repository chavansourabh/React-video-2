import React from "react";

export default function Header() {
  return (
    <header>
      <nav className="nav">
        <img src="./react-brands.svg" alt="" className=" logo" />
        <ul className="nav-list">
          <li className="nav-item">pricing</li>
          <li className="nav-item">about</li>
          <li className="nav-item">contact</li>
        </ul>
      </nav>
    </header>
  );
}
