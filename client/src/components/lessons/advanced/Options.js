import React from 'react'

const Options = (props) => {
  return (
    <div className={props.className} onClick={() => props.onClick(props.choice)}>
      {props.choice}
    </div>
  )
}

export default Options
