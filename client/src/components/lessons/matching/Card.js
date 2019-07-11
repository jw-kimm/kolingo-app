// //individual cards
import React from 'react'

const Card = (props) => {
  
  return(
      <div className={props.className} onClick={() => props.onClick(props.choice)}>
        {props.choice}
      </div>
  )
}

export default Card
 