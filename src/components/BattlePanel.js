import "./css/BattlePanel.css";
import React from "react";
import BattleDie from "./BattleDie.js";
import UpdateBattlePanel from "./logic/UpdateBattlePanel.tsx";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import BattleText from "./BattleText.js";

const BattlePanel = (props) => {
  const {
    onlyPlayerAttack,
    onlyOpponentAttack,
    playerRoll,
    opponentRoll,
    handleAttack
  } = UpdateBattlePanel(props);
  return (
    <div className="component-battle-panel">
      <Row>
        <Col>
          <BattleDie name="player-die" value={playerRoll} style={{float:'left'}}/>
        </Col>
        <Col>
          <BattleDie name="opponent-die" value={opponentRoll} style={{float:'right'}}/>
        </Col>
      </Row>
      <BattleText text={`You hit for ${playerRoll}`}/>
      <BattleText text={`Your opponent hit for ${opponentRoll}`}/>
      <div className="battle-actions">
        <button onClick={handleAttack}>
          {/* The case of both players have 6 will be handled the same as a normal roll */}
          {(!onlyPlayerAttack && !onlyOpponentAttack) || (onlyPlayerAttack && onlyOpponentAttack)
            ? "Attack!"
            : !onlyPlayerAttack && onlyOpponentAttack
              ? "Only Opponent attacks!"
              : "Only Player attacks!"
          }
        </button>
      </div>
    </div>
  );
};

export default BattlePanel;
