import React from "react";

const Card = (props) => {
  return (
    <>
      <div className={props.className}
        onClick={() => props.onClick(props.choice)}>
        <p>{props.choice}</p>
        {/* onClick={() => props.onClick(props.choice.korean)}>
        <p>{props.choice.korean}</p>
      </div>
      <div className={props.className}
        onClick={() => props.onClick(props.choice.english)}>
        <p>{props.choice.english}</p> */}
      </div>
    </>
  )
}

export default Card
