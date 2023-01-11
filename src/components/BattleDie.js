import React from "react";

export default function BattleDie(props) {
  return (
    <div className="dice-result" style={props.style}>{props.value}</div>
  );
}
