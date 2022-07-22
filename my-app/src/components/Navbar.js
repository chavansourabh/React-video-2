import React from "react";
import Logo from "./logo.svg";

export default function Navbar() {
  return (
    <nav className="navbar  bg-dark text-white container-fluid ">
      <h1 className="logo">
        <img src={Logo} alt="logo" width="80px" />
        ReactFacts
      </h1>
      <h4 className="text-capitalize fw-light me-4 nav-info ">
        react course - project 1
      </h4>
    </nav>
  );
}
