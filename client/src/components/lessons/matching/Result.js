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

const Img = styled.img`
  vertical-align: middle;
  max-height: 80px;
  margin-right: 30px;
`
const Message = styled.div`
  font-size: 24px;
  line-height: 30px;
`
const MessageHeader = styled.div`
  text-align: center;
  font-size: 25px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 200px;
`


const Result = ({
  pageState, // string of either Incorrect, Correct, Progress
  handleOnClick,// callback
  skipQuestion,
}) => {

  let color
  let fontColor
  let buttonContent = "check"
  let hideButton = true

  if (pageState === 'Wrong') {
    color = '#ffc1c1'
    fontColor = "#ea2b2b";
    buttonContent = 'continue'
    hideButton = false
  } else if (pageState === 'Correct') {
    color = '#b8f28b'
    fontColor = " #58a700";
    buttonContent = "continue"
    hideButton = false
  } else {
    color = 'white'
  }

  return (
    <BottomSection>
      <MessageHeader style={{ background: color }}>
        {pageState !== 'Progress' && !hideButton &&
          <Message style={{ color: fontColor, fontWeight: "bold" }}>
            <Img
              alt=""
              src={pageState === "Correct" ? "/check.png" : "/wrong.png"} />
            {pageState}
          </Message>
        }
        {hideButton &&
          <Button type="button"
            onClick={() => skipQuestion()}>
            Skip
          </Button>
        }

        <Button
          type="button"
          onClick={() => handleOnClick()}
          style={pageState === "check" ? {
            backgroundColor: '#78c800', color: "white", outline: "none"
          } : pageState === "Correct" ? {
            backgroundColor: '#78c800', color: "white", outline: "none"
          } : pageState === "Wrong" ? {
            backgroundColor: '#ea2b2b', color: "white", outline: "none"
          } : {
                  backgroundColor: '#e5e5e5', outline: "none"
                }}
        > {buttonContent}
        </Button>
      </MessageHeader>
    </BottomSection >
  )
}

export default Result;
