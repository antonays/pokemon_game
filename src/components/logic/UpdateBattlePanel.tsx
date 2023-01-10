import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import type { IStateObject } from "../../types/IStateObject";

const { PlayerType } = require("../../types/PlayerType.ts");

const UpdateBattlePanel = (props: any): {} => {
  const [onlyPlayerAttack, setOnlyPlayerAttack] = useState<boolean|null>(false);
  const [onlyOpponentAttack, setOnlyOpponentAttack] = useState<boolean|null>(false);
  const [playerRoll, setPlayerRoll] = useState<number|null>(0);
  const [opponentRoll, setOpponentRoll] = useState<number|null>(0);

  const dispatch: Dispatch = useDispatch();
  const current_global_state = useSelector((state: IStateObject) => state);

  const handleAttack = () => {
    let player_res: number = 0;
    let opponent_res: number = 0;
    if (!onlyOpponentAttack) {
      player_res = Math.floor(Math.random() * 6) + 1;
    }
    if (!onlyPlayerAttack) {
      opponent_res = Math.floor(Math.random() * 6) + 1;
    }
    let new_player_health: number = current_global_state!.player - opponent_res;
    if (new_player_health <= 0) {
      new_player_health = 0;
      props.battleEndHandler(PlayerType.Player);
    }
    let new_opponent_health: number = current_global_state!.opponent - player_res;
    if (new_opponent_health <= 0) {
      new_opponent_health = 0;
      props.battleEndHandler(PlayerType.Opponent);
    }
    setPlayerRoll(player_res);
    setOpponentRoll(opponent_res);
    setOnlyPlayerAttack(player_res === 6);
    setOnlyOpponentAttack(opponent_res === 6);

    dispatch({
      type: 'UPDATE',
      payload: {'opponent': new_opponent_health, 'player': new_player_health}
    });

    if ((new_opponent_health <= 0) || (new_player_health <= 0)) {
      clearState();
    }
  };

  const clearState = (): void => {
    setOnlyPlayerAttack(false);
    setOnlyOpponentAttack(false);
    setOpponentRoll(0);
    setPlayerRoll(0);
  };

  return {
    onlyPlayerAttack,
    onlyOpponentAttack,
    playerRoll,
    opponentRoll,
    handleAttack
  }
};

export default UpdateBattlePanel;