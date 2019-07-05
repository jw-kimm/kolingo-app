import React, { Component } from "react";
import Navbar from './shared/Navbar'
import { Link } from 'react-router-dom'


class LessonsList extends Component {

  render() {

    return (
      <div className="lessons-container">
        <Navbar />
        <Link
            to="/alphabet1"
            className="buttonalpha1"
          >
            Alphabet1
          </Link>
          <Link
            to="/alphabet1"
            className="buttonalpha2"
          >
            Alphabet2
          </Link>
          <Link
            to="/alphabet1"
            className="buttonalpha3"
          >
            Alphabet3
          </Link>
      </div>
    )
  }
}



export default LessonsList;