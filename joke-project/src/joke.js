import React from "react";

export default function Joke(props) {
  return (
    <div className="container mt-5 ps-5 ">
      <p className="text-secondary fs-3">{props.id}.</p>
      {props.setup && (
        <h2 className="text-primary">
          <span className="text-warning">Que:</span> {props.setup}
        </h2>
      )}
      <h4>
        <span className="text-success">Ans:</span> {props.punchline}
      </h4>

      <div className="seperator"></div>
    </div>
  );
}
