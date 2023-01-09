import React from "react";
import './PokemonPanel.css';
import PokemonHealthPanel from "./PokemonHealthPanel.js";

export default  class PokemonPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myName:'',
      myType:this.props.playerType,
      myImage:''
    };
  };

  componentDidMount() {
    console.log('getting pokemon image');
		const randomPokemonId = Math.floor(Math.random() * 500);
    fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemonId}`)
      .then(res => res.json())
      .then(
				(result) => {
          this.setState({
              myName: result.name,
							myImage: result.sprites.other.dream_world.front_default
					});
        },
			)
      .catch(function(error) {
        console.error("failed to fetch pokemon image :(");
      });
  }

  render() {
    return (
        <div className="component-pokemon panel">
            <div className="component-pokemon-name">
                {this.state.myName}
            </div>
            <PokemonHealthPanel current_health={this.props.pokemon.health}/>
            <div className="component-pokemon-image">
              <img
                src={this.state.myImage}
                className='img-fluid rounded'
                alt={this.state.myName}
              />
            </div>
        </div>
      );
  }
}