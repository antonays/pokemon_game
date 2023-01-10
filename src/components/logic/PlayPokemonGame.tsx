import { useState } from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import type { IGameResults } from "../../types/IGameResults";
const { PlayerType } = require("../../types/PlayerType.ts");

const PlayPokemonGame = (): {} => {
  const [playerPokemonKey, setPlayerPokemonKey] = useState<number|null>(0);
  const [opponentPokemonKey, setOpponentPokemonKey] = useState<number|null>(0);
  const [gameResults, setGameResults] = useState<IGameResults|null>({
    wins: 0,
    defeats: 0,
    lastResultText: ""
  });
  const [gameOverFlag, setGameOverFlag] = useState<boolean|null>(false);
  const dispatch: Dispatch = useDispatch();

  const battleEndHandler = (loser = undefined): void => {
    console.log('handling battle end event');
    setGameOverFlag(true);
    if (loser === PlayerType.Player) {
      setGameResults({
        defeats: gameResults!.defeats + 1,
        wins: gameResults!.wins,
        lastResultText: "Game Over :( ..",
      });
    } else if (loser === PlayerType.Opponent) {
      setGameResults({
        wins: gameResults!.wins + 1,
        defeats: gameResults!.defeats,
        lastResultText: "You Win !",
      });
    } else {
      console.log("illegal player type");
    }
  };

  const restartGame = (condition): void => {
    console.log('handling game restart');
    if (condition === "new") {
      setPlayerPokemonKey(playerPokemonKey! + 1);
      setGameResults({
          wins: 0,
          defeats: 0,
          lastResultText: ''
      });
    }
    setGameOverFlag(false);
    setOpponentPokemonKey(opponentPokemonKey! + 1);
    dispatch({
      type: 'RESET'
    });
  };

  return {
    playerPokemonKey,
    opponentPokemonKey,
    gameResults,
    gameOverFlag,
    battleEndHandler,
    restartGame
  }
};

export default PlayPokemonGame;