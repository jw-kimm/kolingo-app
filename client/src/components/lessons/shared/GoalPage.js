import React from "react"
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const Result = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh;
  text-align: center;
`

const ResultHeader = styled.h2`
  color: #3c3c3c;
  font-size: 24px;
  line-height: 2rem;
  background: white;
  color: black;
`
const ResultP = styled.p`
  color: #777;
  justify-content: center;
  font-size: 24px;
  line-height: 2rem;
  padding: 20px;
  width: 500px;
`

const Img = styled.img`
  width: 150px;
  margin: 76px 0 30px 0
`
const Button = styled.button`
  background-color: rgb(120, 200, 0);
  color: white;
  text-decoration-line: none;
  border: none;
  color: white;
  padding: 12px 36px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 22px;
  border-radius: 1.25rem;
  margin-left: 24px;
`

const ButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly; 
  cursor: pointer;
`

const GoalPage = ({ score, submitScore }) => {
  let message

  if (score <= 50) {
    message = "You can do better next time! Try again!"
  } else if (score <= 60) {
    message = "GREAT! Ready to Move on?"
  } else if (score === 100 && window.location.pathname === "/advanced") {
    message = "AWESOME! All Lessons Completed!"
  } else {
    message = "AWESOME! Lesson Completed! Ready to move on to the next level?"
  }

  return (
    <Result>
      <Img src="star.png" alt="" />
      <ResultHeader> {score}XP EARNED 🎉</ResultHeader>
      <ResultP>{message}</ResultP>
      <ButtonDiv>
        <Link to="/lessons" id="nextLesson"
          style={{ backgroundColor: '#78c800', color: "white", textDecorationLine: 'none', borderRadius: "1.25rem" }}
          onClick={() => submitScore(score)}>
          Continue
      </Link>
        <Button
          onClick={() => window.location.reload()}>
          Redo
      </Button>
      </ButtonDiv>
    </Result>
  )
}

export default GoalPage