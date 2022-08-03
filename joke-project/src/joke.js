import React from "react";

export default function Joke(props) {
  const [isShown, setIsShown] = React.useState(false);

  function toggle() {
    setIsShown((prevState) => {
      return (prevState = !prevState);
    });
  }
  return (
    <div className="container mt-5 ps-5 ">
      <p className="text-secondary fs-3 text-center">{props.id}</p>
      {props.setup && (
        <h2 className="text-primary">
          <span className="text-warning">Que:</span> {props.setup}
        </h2>
      )}
      {isShown && (
        <h4>
          <span className="text-success">Punchline:</span> {props.punchline}
        </h4>
      )}
      <button className="btn btn-primary mt-4" onClick={toggle}>
        {isShown ? "Hide punchline" : "Show punchline"}
      </button>
      <div className="seperator"></div>
    </div>
  );
}
