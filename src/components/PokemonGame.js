import BattlePanel from './BattlePanel';
import PokemonPanel from "./PokemonPanel.js";
import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class PokemonGame extends React.Component {
	PlayerType = {
		Player: 0,
		Opponent: 1,
	}
	
	constructor(props) {
		super(props);
		this.state = {
			playerPokemon:{
				health:100,
				last_die_cast: 0,
				key:0
			},
			opponentPokemon:{
				health:100,
				last_die_cast: 0,
				key:0
			},
			gameresults:{
				wins:0,
				defeats:0,
				lastResultText:''
			},
			gameOverFlag:false
		}
	}
	
	handleBattleClick = (player_res, opponent_res) => {
		console.log(`attack click caught, player hits ${player_res}, opponent hits ${opponent_res}`);
		var new_player_health = this.state.playerPokemon.health - opponent_res;
		if (new_player_health <= 0){
			new_player_health = 0;
			this.battleEndHandler(this.PlayerType.Player);
		}
		var new_opponent_health = this.state.opponentPokemon.health - player_res;
		if (new_opponent_health <= 0){
			new_opponent_health = 0;
			this.battleEndHandler(this.PlayerType.Opponent);
		}
		this.setState({
			playerPokemon:{
					health: new_player_health,
					last_die_cast: player_res,
					key: this.state.playerPokemon.key
				},
			opponentPokemon:{
					health: new_opponent_health,
					last_die_cast: opponent_res,
					key: this.state.opponentPokemon.key
				}
		});
	};

	battleEndHandler = loser => {
		this.setState({gameOverFlag:true});
		if (loser === this.PlayerType.Player){
			this.setState({
				gameresults: {
					defeats: this.state.gameresults.defeats + 1,
					wins: this.state.gameresults.wins,
					lastResultText: 'Game Over :( ..'
				}
			});
		} else if (loser === this.PlayerType.Opponent){
			this.setState({
				gameresults: {
					wins: this.state.gameresults.wins + 1,
					defeats: this.state.gameresults.defeats,
					lastResultText: 'You Win !'
				}
			});
		} else {
			console.log("illegal player type");
		}
	}

	restartGame = condition => {
		var player_update_dict = {
			health:100,
			last_die_cast: 0,
			key: this.state.playerPokemon.key
		};
		if (condition === "new"){
			player_update_dict["key"] = this.state.playerPokemon.key + 1;
			this.setState({
				gameresults: {
					wins: 0,
					defeats: 0
				}
			});
		}
		this.setState({
			gameOverFlag:false,
			opponentPokemon:{
				health:100,
				last_die_cast: 0,
				key: this.state.opponentPokemon.key + 1
			},
			playerPokemon:player_update_dict,
		});
	}

  render() {
    return (
			<div className="component-pokemon-game">
				<Row>
					<h1>Pokemon Battle Simulator</h1>
				</Row>
				<Row>
					<div className={this.state.gameOverFlag? 'fadeMe' : 'fadeMe hidden'}>
						<div className="overlay-message">{this.state.gameresults.lastResultText}</div>
						<div className="overlay-controls">
							<button onClick={(e) => this.restartGame("new", e)}>New Pokemon</button>
							<button onClick={(e) => this.restartGame("same", e)}>Same Pokemon</button>
						</div>
					</div>
					<Col>
						<PokemonPanel 
							key={this.state.playerPokemon.key}
							pokemon={this.state.playerPokemon}
							playerType={this.PlayerType.Player} 
							loserHook={this.notifyBattleLoser} 
						/>
					</Col>
					<Col>
						<BattlePanel 
							handleBattleClick={this.handleBattleClick} 
							playerDieResult={this.state.playerPokemon.last_die_cast} 
							opponentDieResult={this.state.opponentPokemon.last_die_cast}
						/>
					</Col>
					<Col>
						<PokemonPanel
							key={this.state.opponentPokemon.key}
							pokemon={this.state.opponentPokemon}
							playerType={this.PlayerType.Opponent} 
							loserHook={this.notifyBattleLoser}
						/>
					</Col>
				</Row>
				<Row>
					<div className="component-pokemon-stats">
						<div>Wins: {this.state.gameresults.wins}</div>
						<div>Defeats: {this.state.gameresults.defeats}</div>
					</div>
				</Row>
			</div>
    );
  }
}
