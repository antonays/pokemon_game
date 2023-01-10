import ProgressBar from "react-bootstrap/ProgressBar";
import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
const { PlayerType } = require("../types/PlayerType.ts");

export default function PokemonHealthPanel(props) {
  const [health, setHealth] = useState(100);
  const fields = useSelector(state => state);

  useEffect(() => {
    setHealth(props.type === PlayerType.Player ? fields.player : fields.opponent);
  }, [fields, props.type]);

  return (
    <div className="component-pokemon-health">
      <div className="component-health-bar">
        <ProgressBar variant="success" now={health} />
      </div>
      <div className="component-health-indicator">
        {health} / 100
      </div>
    </div>
  );
}
