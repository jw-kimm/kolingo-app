import React, { Component } from "react";

import styled from 'styled-components'

const Result = ({
  pageState, // string of either Incorrect, Correct, Progress
  onCheckButtonClick, // callback
}) => {
  let color
  let buttonContent = null

  if (pageState === 'Incorrect') {
    color = 'red'
    buttonContent = <button background={'red'}></button>
  } else if (pageState === 'Correct') {
    color = 'green'
    buttonContent = <button background={'green'}></button>
  } else {
    color = 'white'
  }

  return (
    <div style={{ outline: '1px solid blue', height: 200, width: 400, background: color }}>
      {buttonContent}
      <button onClick={() => onCheckButtonClick()}>check</button>
    </div>
  )
}

export default Result;

//continueButtonClick 