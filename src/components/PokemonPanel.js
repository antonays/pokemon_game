import React from "react";
import PokemonHealthPanel from "./PokemonHealthPanel.js";

export default  class PokemonPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myName:this.props.name,
      myType:this.props.playerType,
      myImage:''
    };
  };

  componentDidMount() {
    console.log('getting pokemon image');
		let randomPokemonId = Math.floor(Math.random() * 500)
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