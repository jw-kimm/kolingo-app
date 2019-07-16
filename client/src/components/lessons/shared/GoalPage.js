import React from "react"
import { Link } from 'react-router-dom';

const GoalPage = (props) => {
  return(
    //daily stroke
    
    <div className ="result">
      <h2> Lesson Complete! 10XP </h2>
      <p> You met your daily goal</p>

      <div className = "bottom-container">
      <Link to="/lessons" id="cont-btn" 
      style={{backgroundColor: '#78c800', color: "white", textDecorationLine: 'none'}}>
      Continue </Link> 
    </div>
  </div>
  )
}
  
  export default GoalPage
   