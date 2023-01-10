import React from "react";
import PokemonHealthPanel from "./PokemonHealthPanel.js";
import UpdatePokemonPanel from "./logic/UpdatePokemonPanel";
import "./css/PokemonPanel.css";

const PokemonPanel = (props: any) => {
  const {
    myName,
    myImage
  } = UpdatePokemonPanel();
  return (
    <div className="component-pokemon panel">
      <div className="component-pokemon-name">{myName}</div>
      <PokemonHealthPanel type={props.playerType} />
      <div className="component-pokemon-image-wrapper">
        <img src={myImage} className="img-fluid rounded" alt={myName} />
      </div>
    </div>
  );
}

export default PokemonPanel;