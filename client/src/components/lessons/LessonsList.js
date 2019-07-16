import React, { Component } from "react";
import Navbar from './shared/Navbar'
import { Link } from 'react-router-dom'


class LessonsList extends Component {

  render() {
    return (
      <div>
        <Navbar />
      <div className="lessons-list">
        <li>
          <Link
            to="/alphabet"
            className="buttonLink">
            Alphabet1
          </Link>
        </li>
        <li>
          <Link
          to="/alphabet1"
          className="buttonLink">
          Alphabet2
          </Link>
        </li>
        <li>
          <Link
          to="/alphabet1"
          className="buttonLink">
          Alphabet3
          </Link>
          </li>
      </div>
    </div>
    )
  }
}



export default LessonsList;