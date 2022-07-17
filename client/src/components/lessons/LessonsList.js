import React, { Component } from "react";
import Navbar from './shared/Navbar'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import { Route, Switch } from 'react-router-dom';

import BasicLevel from './basic';
import MatchingContainer from './intermediate/MatchingContainer';
import Advanced from './advanced/Advanced';



class LessonsList extends Component {

  firstUnlock = false
  secondUnlock = false
  thirdUnlock = false
  className = "lessonsLink"

  render() {
    const { user } = this.props.auth
    const { isAuthenticated } = this.props;

    if (isAuthenticated === true) {
      if (user.userExp >= 100) {
        this.firstUnlock = true
        this.secondUnlock = true
        this.thirdUnlock = true
      } else if (user.userExp >= 60) {
        this.firstUnlock = true
        this.secondUnlock = true
      } else {
        this.firstUnlock = true
      }
    } else {
      this.firstUnlock = true
    }

    //switch statement to other react components

    return (
      <>
        <Navbar />
        <ListContainer>
          <SubList >
            <Header> Basic </Header>
            <Link
              to="/lessons/basic"  >
              <Img src="sunshower.png" alt="" style={this.firstUnlock ? { filter: "none" } : null} />
              <SubHeader />
            </Link>
          </SubList>

          <SubList >
            <Header> Intermediate </Header>
            <Link
              to="/lessons/intermediate" style={!this.secondUnlock ? { pointerEvents: "none" } : null} >
              <Img src="cactus.png" alt="" style={this.firstUnlock && this.secondUnlock ? { filter: "none" } : null} />
              <SubHeader style={!this.secondUnlock ? { visibility: "visible", pointerEvents: "none" } : { visibility: "hidden" }}>
                80XP Required to unlock this level
              </SubHeader>
            </Link>
          </SubList>

          <SubList >
            <Header> Advanced </Header>
            <Link
              to="/lessons/advanced" style={!this.thirdUnlock ? { pointerEvents: "none" } : null}>
              <Img src="llama.png" alt="" style={this.firstUnlock && this.secondUnlock && this.thirdUnlock ? { filter: "none" } : null} />
              <SubHeader style={!this.thirdUnlock ? { visibility: "visible", pointerEvents: "none" } : { visibility: "hidden" }}>
                100XP Required to unlock this level
              </SubHeader>
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


const Img = styled.img`
  width: 100px;
  filter: grayscale(1) opacity(40%);
  cursor: pointer;
  width: 140px;
  padding: 75px;
`

const ListContainer = styled.div`
  padding-top: 86px;
  display: flex;
  align-items: center;
  flex-direction: row;
  border: 0!important;
  text-align: center;
  width: 100%;
  height: 500px;
  margin: auto;
  position: absolute;
  justify-content: space-evenly;
`

const SubList = styled.div`
  cursor: pointer;
  margin-bottom: 40px;
  border: 2px solid rgb(229, 229, 229);
  border-radius: 20px;
  padding: 10px;
  :hover{
    -webkit-box-shadow: 0 0 10px rgb(184, 181, 181);
    box-shadow: 0 0 10px rgb(184, 181, 181);
    transform: scale(1.1);
  }
`

const SubHeader = styled.p`
  color: #234d90d6;
  font-weight: bold;
  font-size: 15px;
`
const Header = styled.p`
  color: #737272
  font-weight: bold;
  font-size: 20px;
`
