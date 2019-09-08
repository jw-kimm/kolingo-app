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
              <img src="sunshower.png" alt="" style={{ width: 100, }} />
            </Link>
          </li>

          <li>
            <Link
              to="/matching">
              <img src="cactus.png" alt="" style={{ width: 100, WebkitFilter: "opacity(40%) grayscale(1)" }} />
            </Link>
          </li>

          <li>
            <Link
              to="/advanced">
              <img src="llama.png" alt="" style={{ width: 100, WebkitFilter: "opacity(40%) grayscale(1)" }} />
            </Link>
          </li>
        </div>
      </div>
    )
  }
}



export default LessonsList;