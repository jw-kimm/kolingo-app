import React from 'react'


const Card = ({ value, choice, className, onClick, i }) => {
  return (
    <div
      key={i}
      className={className}
      onClick={() => onClick(value)}
    >
      {choice}
    </div>
  )
}

export default Card
