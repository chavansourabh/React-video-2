import React from "react";
// import Bglogo from "./react-brands.svg";

export default function MainContent() {
  return (
    <div className="mainBody">
      <article>
        <h1 className="text-white ">Fun fact about React</h1>
        <ul className="text-light">
          <li>Was first released in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has well over 100k stars on Github</li>
          <li>Is maintained by Facebook</li>
          <li>Power thousands of enterprise apps,including mobile apps</li>
        </ul>
      </article>
      {/* <div className="bglogo">
        <img src={Bglogo} alt="bg-logo" />
      </div> */}
    </div>
  );
}
