import React from "react"
import { Link } from 'react-router-dom';

const GoalPage = (props) => {
  return (
    //daily stroke

    <div className="result">
      <img src="star.png" alt="" style={{
        width: 150,
        margin: "76px 0 30px 0"
      }}
      />
      <h2> Lesson Completed! 10XP 🎉</h2>
      <p> You met your daily goal!! </p>
      <Link to="/matching" id="nextLesson" className="pull-right"
        style={{ backgroundColor: '#78c800', color: "white", textDecorationLine: 'none', borderRadius: "1.25rem" }}>
        Continue </Link>
    </div>
  )
}

export default GoalPage
