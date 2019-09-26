import React from "react"
import { Link } from 'react-router-dom';
import styled from 'styled-components'


const Result = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 300px;
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
  font-size: 19px;
  line-height: 2rem;
  padding: 20px;
  width: 100%;
`

const Img = styled.img`
  width: 150px;
  margin: 76px 0 30px 0
`


const GoalPage = ({ score, submitScore }) => {

  let message

  if (score >= 0) {
    message = "You can do better next time! Try again!"
  } else if (score >= 50) {
    message = "GREAT! Ready to Move on?"
  } else if (score === 100) {
    message = "AWESOME! Lesson Completed! Ready to move on to the next level?"
  }

  return (
    <Result>
      <Img src="star.png" alt="" />
      <ResultHeader> {score}XP EARNED 🎉</ResultHeader>
      <ResultP>{message}</ResultP>
      <Link to="/lessons" id="nextLesson" className="pull-right"
        style={{ backgroundColor: '#78c800', color: "white", textDecorationLine: 'none', borderRadius: "1.25rem" }}
        onClick={() => submitScore(score)}>
        Continue
      </Link>
    </Result>
  )
}

export default GoalPage