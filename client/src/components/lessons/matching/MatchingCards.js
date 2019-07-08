//container iterating thru
import React from "react";
import Card from './Card'

const MatchingCards = ({ choices, onClick }) => {
  return(
    <div className = "card-container">
      { choices.map(choice => 
        <Card
        key={choice.id}
        choice={choice}
        onClick={onClick}
        />
      )}
    </div>
  ) 
}

export default MatchingCards

