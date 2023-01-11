import BattlePanel from "./BattlePanel.js";
import PokemonPanel from "./PokemonPanel.js";
import PlayPokemonGame from "./logic/PlayPokemonGame.tsx";
import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const { PlayerType } = require("../types/PlayerType.ts");

const PokemonGame = () => {
  const {
    playerPokemonKey,
    opponentPokemonKey,
    gameResults,
    gameOverFlag,
    battleEndHandler,
    restartGame
  } = PlayPokemonGame();
  return (
    <div className="component-pokemon-game">
      <Row>
        <h1>Pokemon Battle Simulator</h1>
      </Row>
      <Row>
        <div className={gameOverFlag ? "fadeMe" : "fadeMe hidden"}>
          <div className="overlay-message">
            {gameResults.lastResultText}
          </div>
          <div className="overlay-controls">
            <button onClick={(e) => restartGame("new", e)}>
              New Pokemon
            </button>
            <button onClick={(e) => restartGame("same", e)}>
              Same Pokemon
            </button>
          </div>
        </div>
        <Col>
          <PokemonPanel
            key={playerPokemonKey}
            playerType={PlayerType.Player}
          />
        </Col>
        <Col>
          <BattlePanel battleEndHandler={battleEndHandler} />
        </Col>
        <Col>
          <PokemonPanel
            key={opponentPokemonKey}
            playerType={PlayerType.Opponent}
          />
        </Col>
      </Row>
      <Row>
        <div className="component-pokemon-stats">
          <div>Wins: {gameResults.wins}</div>
          <div>Defeats: {gameResults.defeats}</div>
        </div>
      </Row>
    </div>
  );
}

export default PokemonGame;
