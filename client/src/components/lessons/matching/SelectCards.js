//container iterating thru
import React from "react";
import Card from './Card'

const SelectCards = ({ choices, onClick, answer, selectedCard }) => {
  return(
    <div className = "card-container">
      { choices.map(choice => 
        <Card
          key={choice.value}
          choice={choice}
          onClick={onClick}
          answer={answer}
          className = {selectedCard === choice ? 'activeCard' : "card"}
        />
      )}
    </div>
  ) 
}

export default SelectCards

//style={this.state.isAnswer ? {backgroundColor: 'red'} : {backgroundColor: 'green'}}

//// disabled = {this.state.disableCheck}