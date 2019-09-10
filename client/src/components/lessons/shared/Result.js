import React from "react";

import styled from 'styled-components'

const BottomSection = styled.div`
  display: flex;
  background: #fff;
  border-top: 2px solid #e5e5e5;
  height: 174px;  
  color: white;
  text-align: center;
  flex-direction: column;
`

const Button = styled.button`
  font-weight: bold;
  width: 210px;
  color: white;
  background-color: rgb(241, 241, 241);
  border-radius: 15px;
  text-align: center;
  border-width: 2px 2px 4px;
  text-transform: uppercase;
  padding: 16px;
  font-size: 20px;
    :hover{
    background-color: #afafaf;
    color: white;
    border-color: #e5e5e5;
    }
`
const BottomWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  align-items: center;
  flex-flow: row;
  flex-wrap: nowrap;
  height: 170px;
`
const MessageHeader = styled.div`
  text-align: center;
  font-size: 25px;
  display: flex;
  align-items: center;
  margin: 10px;
`


const Result = ({
  pageState, // string of either Incorrect, Correct, Progress
  handleOnClick,// callback
  currentAnswer,
  skipQuestion,
}) => {

  let color
  let buttonContent = "check"
  let hideButton = false

  if (pageState === 'Wrong') {
    color = '#ffc1c1'
    buttonContent = 'continue'
    hideButton = true
  } else if (pageState === 'Correct') {
    color = '#78c800'
    buttonContent = "continue"
    hideButton = true
  } else {
    color = 'white'
  }

  return (
    <BottomSection>
      <MessageHeader style={{ background: color }}>
        <img alt="" style={{ maxHeight: 80, marginRight: 10 }}
          src={pageState === "Correct" ? "/check.png" : pageState === "Wrong" ? "/wrong.png" : "display: none"} />
        {pageState}
      </MessageHeader>

      <BottomWrapper>
        <Button type="button"
          onClick={() => skipQuestion()}
          style={!hideButton ? { display: "block", outline: "none" } : { display: 'none' }}> Skip
      </Button>

        <Button
          type="button"
          onClick={() => handleOnClick()}
          disabled={!currentAnswer}
          style={pageState === "check" ? { backgroundColor: '#78c800', color: "white", outline: "none" } : pageState === "Correct" ? { backgroundColor: '#78c800', color: "white", outline: "none" } : pageState === "Wrong" ? { backgroundColor: '#ffc1c1', color: "#ea2b2b", outline: "none" } :
            { backgroundColor: '#e5e5e5', outline: "none" }}
        > {buttonContent}
        </Button>
      </BottomWrapper>
    </BottomSection >
  )
}

export default Result;
