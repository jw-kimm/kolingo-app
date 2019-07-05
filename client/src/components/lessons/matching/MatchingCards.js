//container iterating thru
import React, { Component } from "react";
import Crad from '../Card'

const MatchingCards = choices => {

  return(
    <div>
      {choices.map(choice => {
        // <Card content={choice}/>
      })}
    </div>
  ) 
}