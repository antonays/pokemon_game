import React from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';


export default class PokemonHealthPanel extends React.Component {
  render() {
    return (
        <div className="component-pokemon-health">
            <div className="component-health-bar">
                <ProgressBar variant="success" now={this.props.current_health} />
            </div>
            <div className="component-health-indicator">
                {this.props.current_health} / 100
            </div>
        </div>
      );
  }
}