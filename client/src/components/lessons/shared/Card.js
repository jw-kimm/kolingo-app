import React from 'react'

const Card = ({ value, choice, className, onClick, style }) => {
  return (
    <div
      className={className}
      onClick={() => onClick(value)}
    >
      {choice}
    </div>
  )
}

export default Card