import React from "react";

export default function Die(props) {
  return (
    <div className="dice text-center ">
      <h1>{props.value}</h1>
    </div>
  );
}
