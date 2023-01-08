import './BattlePanel.css';
import React from "react";

import BattleDie from "./BattleDie.js";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class BattlePanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          onlyPlayerAttack: false,
          onlyOpponentAttack: false
        };
      };
    
    handleChange = () => {
		console.log(this.props);
        var player_res = 0
        var opponent_res = 0;
        if (!this.state.onlyOpponentAttack){
            player_res = Math.floor(Math.random() * 6) + 1;
        }
        
        if (!this.state.onlyPlayerAttack){
		    opponent_res = Math.floor(Math.random() * 6) + 1;
        }
		this.props.handleBattleClick(player_res, opponent_res);
        if (player_res === 6){
			this.setState({
                onlyPlayerAttack: true,
            });
		} else {
            this.setState({
                onlyPlayerAttack: false,
            });
        }
		if (opponent_res === 6){
			this.setState({
                onlyOpponentAttack: true,
            });
        } else {
            this.setState({
                onlyOpponentAttack: false,
            });
		}
	}

  render() {
    return (
        <div className="component-battle-panel">
            <Row>
                <Col>
                    <BattleDie name="player-die" value={this.props.playerDieResult}/>
                </Col>
                <Col>
                    <BattleDie name="opponent-die" value={this.props.opponentDieResult}/>
                </Col>
            </Row>
            <div className="battle-text-result">
                You hit for {this.props.playerDieResult}
            </div>
            <div className="battle-text-result">
                Your opponent hit for {this.props.opponentDieResult}
            </div>
            <div className="battle-actions">
                <button onClick={this.handleChange}>

                    {((!this.state.onlyPlayerAttack && !this.state.onlyOpponentAttack) || (this.state.onlyPlayerAttack && this.state.onlyOpponentAttack)
                        ? 'Attack!' 
                        : (!this.state.onlyPlayerAttack && this.state.onlyOpponentAttack) ? 'Only Opponent attacks!' : 'Only Player attacks!'
                        
                    )}
                </button>
            </div>
        </div>
      );
  }
}