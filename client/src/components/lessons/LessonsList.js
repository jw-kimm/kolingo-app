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
              to="/alphabet">
              Basic
          </Link>
          </li>
          <li>
            <Link
              to="/matching">
              Intermediate
          </Link>
          </li>
          <li>
            <Link
              to="/advanced">
              Advanced
          </Link>
          </li>
        </div>
      </div>
    )
  }
}



export default LessonsList;