import React, { Component } from "react";
import Navbar from './shared/Navbar'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import styled from 'styled-components'

const Img = styled.img`
  filter: grayscale(1) opacity(40%);
`

class LessonsList extends Component {

  //when user earns certain ex, unlock the next level
  //enabling the next lesson

  render() {
    const { user } = this.props.auth

    let renderLessonsList

    // if (isAuthenticated) {
    //   if (user.userExp <= 50) {
    //     renderLessonsList = //all three should be opened

    //   } else if (user.userExp <= 30) {
    //     renderLessonsList = //open second one
    //   } else {
    //     renderLessonsList = //only the first one
    //   }
    // }
    // style = { user.userExp === 10 ? { filter: "none" } : null }
    // debugger
    return (
      <div>
        <Navbar />
        <div className="lessons-list">

          <li>
            <Link
              to="/alphabet">
              <Img src="sunshower.png" alt="" />
            </Link>
          </li>

          <li>
            <Link
              to="/matching">
              <Img src="cactus.png" alt="" />
            </Link>
          </li>
          {/* style={{ width: 100, WebkitFilter: "opacity(40%) grayscale(1)" }} */}
          <li>
            <Link
              to="/advanced">
              <Img src="llama.png" alt="" />
            </Link>
          </li>
        </div>
      </div>
    )
  }
}

LessonsList.propTypes = {
  auth: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    isAuthenticated: state.auth.isAuthenticated,
    user: state.user
  }
}

export default connect(mapStateToProps, null)(LessonsList);
