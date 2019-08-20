import React, { Component } from "react";
import Navbar from './shared/Navbar'
import { Link } from 'react-router-dom'


class LessonsList extends Component {

  //when user earns certain ex, unlock the next level
  //enabling the next lesson

  render() {
    return (
      <div>
        <Navbar />
        <div className="lessons-list">
          <li>
            <Link
              to="/alphabet"
              className="buttonLink">
              Basic
          </Link>
          </li>
          <li>
            <Link
              to="/matching"
              className="buttonLink">
              Intermediate
          </Link>
          </li>
          <li>
            <Link
              to="/alphabet1"
              className="buttonLink">
              Advanced
          </Link>
          </li>
        </div>
      </div>
    )
  }
}



export default LessonsList;