import './BattlePanel.css';
import React from "react";

import BattleDie from "./BattleDie.js";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class BattlePanel extends React.Component {
    handleChange = () => {
		console.log(this.props)
		this.props.handleBattleClick();
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
                    Attack!
                </button>
            </div>
        </div>
      );
  }
}