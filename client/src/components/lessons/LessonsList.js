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
`

const SubHeader = styled.p`
  color: #8c8888;
  font-weight: bold;
  font-size: 20px;
`

class LessonsList extends Component {

  firstUnlock = false
  secondUnlock = false
  thirdUnlock = false
  className = "lessonsLink"


  render() {
    debugger
    const { user } = this.props.auth

    let message = "Level locked"

    if (this.props.isAuthenticated) {
      if (user.userExp >= 175) {
        this.firstUnlock = true
        this.secondUnlock = true
        this.thirdUnlock = true
      } else if (user.userExp >= 80) {
        this.firstUnlock = true
        this.secondUnlock = true
      } else {
        this.firstUnlock = true
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
              to="/alphabet"  >
              <Img src="sunshower.png" alt="" style={this.firstUnlock ? { filter: "none" } : null} />
              <SubHeader style={this.firstUnlock ? { visibility: "hidden" } : { visibility: "visible", pointerEvents: "none" }}> {message}</SubHeader>
            </Link>
          </SubList>

          <SubList >
            <Link
              to="/matching" style={!this.secondUnlock ? { pointerEvents: "none" } : null} >
              <Img src="cactus.png" alt="" style={this.firstUnlock && this.secondUnlock ? { filter: "none" } : null} />
              <SubHeader style={!this.secondUnlock ? { visibility: "visible", pointerEvents: "none" } : { visibility: "hidden" }}> {message}</SubHeader>
            </Link>
          </SubList>

          <SubList >
            <Link
              to="/advanced" style={!this.thirdUnlock ? { pointerEvents: "none" } : null}>
              <Img src="llama.png" alt="" style={this.firstUnlock && this.secondUnlock && this.thirdUnlock ? { filter: "none" } : null} />
              <SubHeader style={!this.thirdUnlock ? { visibility: "visible", pointerEvents: "none" } : { visibility: "hidden" }}> {message}</SubHeader>
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
