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
  width: 140px;
  padding: 75px;
  :hover {
    
  }
`

const ListContainer = styled.div`
  padding-top: 30px;
  display: flex;
  align-items: center;
  flex-direction: row;
  border: 0!important;
  text-align: center;
  width: 100%;
  height: 500px;
  margin: auto;
  z-index: -2;
  position: absolute;
  justify-content: space-evenly;
`

const SubList = styled.div`
  cursor: pointer;
  margin-bottom: 40px;
  border: 2px solid rgb(229, 229, 229);
  border-radius: 20px;
  padding: 10px;
  // :hover{
  //   <TooltipBox>
  // }
`

class LessonsList extends Component {

  firstUnlock = false
  secondUnlock = false
  thirdUnlock = false
  className = "lessonsLink"


  render() {
    const { user } = this.props.auth

    let message = "Level locked"

    if (this.props.isAuthenticated) {
      if (user.userExp >= 175) {
        this.firstUnlock = true
        this.secondUnlock = true
        this.thirdUnlock = true
        this.className = "activeLessonsLink"
      } else if (user.userExp >= 75) {
        this.firstUnlock = true
        this.secondUnlock = true
        this.className = "activeLessonsLink"
      } else {
        this.firstUnlock = true
        this.className = "activeLessonsLink"
      }
    } else {
      this.firstUnlock = true
    }


    return (
      <>
        <Navbar />
        <ListContainer>

          <SubList >
            <Link
              to="/alphabet" className={this.className} >
              <Img src="sunshower.png" alt="" style={this.firstUnlock ? { filter: "none" } : null} />
              <p style={!this.firstUnlock ? { visibility: "visible", pointerEvents: "none" } : { visibility: "hidden" }}> {message}</p>

            </Link>
          </SubList>

          <SubList >
            <Link
              to="/matching" className={this.className} style={!this.secondUnlock ? { pointerEvents: "none" } : null} >
              <Img src="cactus.png" alt="" style={this.firstUnlock && this.secondUnlock ? { filter: "none" } : null} />
              <p style={!this.secondUnlock ? { visibility: "visible", pointerEvents: "none" } : { visibility: "hidden" }}> {message}</p>
            </Link>
          </SubList>

          <SubList >
            <Link
              to="/advanced" className={this.className} style={!this.thirdUnlock ? { pointerEvents: "none" } : null}>
              <Img src="llama.png" alt="" style={this.firstUnlock && this.secondUnlock && this.thirdUnlock ? { filter: "none" } : null} />
              <p style={!this.thirdUnlock ? { visibility: "visible", pointerEvents: "none" } : { visibility: "hidden" }}> {message}</p>
            </Link>
          </SubList>
        </ListContainer>
      </>
    )
  }
}

LessonsList.propTypes = {
  auth: PropTypes.object.isRequired,
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    isAuthenticated: state.auth.isAuthenticated,
  }
}

export default connect(mapStateToProps, null)(LessonsList);
