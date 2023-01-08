import React from "react";

export default class BattleDie extends React.Component {
  render() {
    return ( 
        <div className="dice-result">
            {this.props.value}
        </div>
    );        
  }
}