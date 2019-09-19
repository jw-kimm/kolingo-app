import React, { Component } from "react";
import Navbar from './shared/Navbar'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import styled from 'styled-components'

const Img = styled.img`
  width: 100px;
  filter: grayscale(1) opacity(40%);
  cursor: pointer;
`

class LessonsList extends Component {
  firstUnlock = false
  secondUnlock = false
  thirdUnlock = false

  render() {
    const { user } = this.props.auth

    if (this.props.isAuthenticated) {
      if (user.userExp >= 50) {
        this.firstUnlock = true
        this.secondUnlock = true
        this.thirdUnlock = true
      } else if (user.userExp >= 30) {
        this.firstUnlock = true
        this.secondUnlock = true
      } else {
        this.firstUnlock = true
      }
    } else {
      this.firstUnlock = true
    }

    return (
      <div>
        <Navbar />
        <div className="lessons-list">
          <li >
            <Link
              to="/alphabet" className={this.firstUnlock ? "activeLessonsLink" : "lessonsLink"} >
              <Img src="sunshower.png" alt="" style={this.firstUnlock ? { filter: "none" } : null} />
            </Link>
          </li>

          <li >
            <Link
              to="/matching" className={this.firstUnlock && this.secondUnlock ? "activeLessonsLink" : "lessonsLink"} >
              <Img src="cactus.png" alt="" style={this.firstUnlock && this.secondUnlock ? { filter: "none" } : null} />
            </Link>
          </li>
          <li>
            <Link
              to="/advanced" className={this.firstUnlock && this.secondUnlock && this.thirdUnlock ? "activeLessonsLink" : "lessonsLink"} >
              <Img src="llama.png" alt="" style={this.firstUnlock && this.secondUnlock && this.thirdUnlock ? { filter: "none" } : null} />
            </Link>
          </li>
        </div>
      </div>
    )
  }
}

LessonsList.propTypes = {
  auth: PropTypes.object.isRequired,
  // user: PropTypes.object.isRequired,
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    isAuthenticated: state.auth.isAuthenticated,
    // user: state.user
  }
}

export default connect(mapStateToProps, null)(LessonsList);
